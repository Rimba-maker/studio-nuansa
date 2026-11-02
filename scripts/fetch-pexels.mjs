#!/usr/bin/env node
/**
 * Fetches one Pexels photo per slot in src/data/image-slots.ts into public/images/pexels/
 * and writes src/data/images.generated.json (with photographer credit + average colour).
 *
 *   PEXELS_API_KEY=xxxx pnpm images            # fill every slot not yet fetched
 *   PEXELS_API_KEY=xxxx pnpm images --refresh  # re-pick every slot
 *   PEXELS_API_KEY=xxxx pnpm images --only hero,project-sembilu
 *
 * Needs api.pexels.com and images.pexels.com to be reachable. Free key: https://www.pexels.com/api/
 *
 * NO API KEY? (Pexels paused new keys.) Use picks mode: open pexels.com in a browser, pick a photo per
 * slot, and paste its page URL (or numeric id) into src/data/pexels-picks.json. Then run:
 *
 *   pnpm images --picks
 *
 * In a Claude cloud session Node ignores the egress proxy by default; prefix the command with
 * NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt. On your own machine it is not needed.
 *
 * Picks mode only downloads from images.pexels.com by photo id; it needs no key. Optional per-slot object
 * form: { "id": 1571460, "photographer": "Name", "photographerUrl": "https://www.pexels.com/@name" }.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const key = process.env.PEXELS_API_KEY;
const picksMode = process.argv.includes('--picks');
if (!key && !picksMode) {
  console.error('PEXELS_API_KEY is not set. Without a key, fill src/data/pexels-picks.json and run: pnpm images --picks');
  process.exit(1);
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outDir = path.join(root, 'public/images/pexels');
const jsonPath = path.join(root, 'src/data/images.generated.json');
const args = process.argv.slice(2);
const refresh = args.includes('--refresh');
const onlyIdx = args.indexOf('--only');
const onlyArg = args.find((a) => a.startsWith('--only='))?.split('=')[1] ?? (onlyIdx >= 0 ? args[onlyIdx + 1] : '');
const only = (onlyArg ?? '').split(',').filter(Boolean);

// Node >= 22.18 strips TypeScript types natively, so the slot table is imported as-is.
await mkdir(outDir, { recursive: true });
const { IMAGE_SLOTS } = await import(pathToFileURL(path.join(root, 'src/data/image-slots.ts')).href);

const current = existsSync(jsonPath) ? JSON.parse(await readFile(jsonPath, 'utf8')) : {};
const used = new Set(Object.values(current).map((v) => v.pexelsId));
const api = async (url) => {
  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
};
const download = async (url, file) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
};

if (picksMode) {
  const picksPath = path.join(root, 'src/data/pexels-picks.json');
  const picks = JSON.parse(await readFile(picksPath, 'utf8'));
  const idOf = (v) => (typeof v === 'object' ? Number(v.id) : Number(String(v).match(/(\d+)\/?(?:[?#].*)?$/)?.[1]));
  let done = 0;
  for (const [id, raw] of Object.entries(picks)) {
    if (!raw || !IMAGE_SLOTS[id]) continue;
    if (only.length && !only.includes(id)) continue;
    const pid = idOf(raw);
    if (!pid) { console.warn(`! ${id}: cannot read a photo id from ${JSON.stringify(raw)}`); continue; }
    const base = `https://images.pexels.com/photos/${pid}/pexels-photo-${pid}.jpeg?auto=compress&cs=tinysrgb`;
    try {
      await download(`${base}&w=1880`, path.join(outDir, `${id}.jpg`));
      await download(`${base}&w=940`, path.join(outDir, `${id}-sm.jpg`));
    } catch (e) { console.warn(`! ${id}: download failed for photo ${pid} (${e.message})`); continue; }
    current[id] = {
      file: `/images/pexels/${id}.jpg`, fileSm: `/images/pexels/${id}-sm.jpg`,
      width: 1880, height: 0, avgColor: '',
      pexelsId: pid, pexelsUrl: `https://www.pexels.com/photo/${pid}/`,
      photographer: raw.photographer ?? '', photographerUrl: raw.photographerUrl ?? 'https://www.pexels.com/',
      query: IMAGE_SLOTS[id].query,
    };
    console.log(`✓ ${id} ← pexels ${pid}`);
    done++;
  }
  await writeFile(jsonPath, JSON.stringify(current, null, 2) + '\n');
  console.log(`Done: ${done} slot(s). Commit public/images/pexels and src/data/images.generated.json.`);
  process.exit(0);
}

for (const [id, slot] of Object.entries(IMAGE_SLOTS)) {
  if (only.length && !only.includes(id)) continue;
  if (current[id] && !refresh && !only.length) continue;
  const q = new URLSearchParams({ query: slot.query, orientation: slot.orientation, per_page: '30', size: 'large' });
  const { photos } = await (await api(`https://api.pexels.com/v1/search?${q}`)).json();
  const pick = photos.find((p) => !used.has(p.id) && p.width >= 1800);
  if (!pick) { console.warn(`! ${id}: no unused result for "${slot.query}"`); continue; }
  used.add(pick.id);
  await download(pick.src.large2x, path.join(outDir, `${id}.jpg`));
  await download(pick.src.large, path.join(outDir, `${id}-sm.jpg`));
  current[id] = {
    file: `/images/pexels/${id}.jpg`, fileSm: `/images/pexels/${id}-sm.jpg`,
    width: pick.width, height: pick.height, avgColor: pick.avg_color,
    pexelsId: pick.id, pexelsUrl: pick.url, photographer: pick.photographer, photographerUrl: pick.photographer_url,
    query: slot.query,
  };
  console.log(`✓ ${id} ← pexels ${pick.id} by ${pick.photographer}`);
  await writeFile(jsonPath, JSON.stringify(current, null, 2) + '\n');
}
console.log('Done. Commit public/images/pexels and src/data/images.generated.json.');
