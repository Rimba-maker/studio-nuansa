---
name: Studio Nuansa
description: Interior studio site laid like the cement-tile floor of an old Indonesian house.
colors:
  botol: "#17362c"
  botol-deep: "#0f261f"
  bone: "#ece6d3"
  bone-dim: "#d9d1b8"
  ochre: "#cf9a2c"
  oxblood: "#6d1c25"
  indigo: "#1d2b57"
  ink: "#10201a"
typography:
  display:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 7.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  none: "0px"
spacing:
  grout: "3px"
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  section-mobile: "96px"
  section-desktop: "144px"
components:
  button-botol:
    backgroundColor: "{colors.botol}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "13.6px 24px"
    height: "48px"
  button-botol-hover:
    backgroundColor: "{colors.ink}"
  button-ochre:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13.6px 24px"
    height: "48px"
  button-ochre-hover:
    backgroundColor: "{colors.bone}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13.6px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  reading-panel:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "56px"
  nav-bar:
    backgroundColor: "{colors.botol-deep}"
    textColor: "{colors.bone}"
    height: "64px"
---

# Design System: Studio Nuansa

## Overview

**Creative North Star: "Ubin Tegel"**

The page is the floor of an old Indonesian house, and each section is a room laid in its own cement tile. Surfaces are matte and square, set edge to edge with a thick ink joint between them. Bottle green is the ground, bone is where reading happens, and ochre, oxblood and indigo appear as tile colour. Chunky soft serif lettering sits against a quiet grotesk for text.

Density is moderate and structural rather than airy: the first viewport is a grid of tiles (a large bone reading panel, one photograph tile, one pattern tile, a stat strip at the base) and later sections reuse the same module of panels separated by grout. Ornament is authored geometry (four mirror-symmetric tegel motifs) and lives on grounds, dividers, swatch chips and the process floor, not behind body text.

The build departs from the cream-ground, serif-plus-one-terracotta-accent, equal-card-row pattern. It has no rounded corners and no shadows.

**Key Characteristics:**
- Bottle-green ground (botol-deep) with bone reading panels.
- Every corner is square; depth comes from 3px ink grout, not shadow.
- Four tegel motifs (kunci, kotak, bintang, daun) generated as SVG data-URIs from one source.
- Display serif for lettering, grotesk for text and uppercase labels.
- Photographs sit square-cornered in the tile grid on their average-colour ground.

## Colors

A dark green floor with bone panels, accented by three tile pigments, held together by one near-black ink.

### Primary
- **Bottle Green** (botol, #17362c): section grounds (contact), the filled button, and the base of the botol tile palette.
- **Deep Bottle Green** (botol-deep, #0f261f): the page background, the navbar, the stat strip and the process-section floor.

### Secondary
- **Ochre** (ochre, #cf9a2c): the primary call-to-action fill in the nav, small labels on green, the focus ring, caret, selection and scrollbar accent, and bullet separators.
- **Oxblood** (oxblood, #6d1c25): category labels and active states on bone, input focus border, tile ground.

### Tertiary
- **Indigo** (indigo, #1d2b57): tile palette only (kotak/pricing and process tiles); not used for text or surfaces.

### Neutral
- **Bone** (bone, #ece6d3): reading panels and body text on green.
- **Bone Dim** (bone-dim, #d9d1b8): row hover on bone and the fallback ground behind photographs.
- **Ink** (ink, #10201a): text on bone, the 3px grout between tiles, borders, and the hover fill for botol and line buttons.

### Named Rules
**The Grout Rule.** Ink is the joint colour. Containers take the ink background and their children sit in a 3px gap, so the seams between tiles are drawn by the container, never by individual borders.
**The Reading Panel Rule.** Long text sits on bone in ink, or on green in bone (80% or more opacity). Tegel patterns never sit behind body text.

## Typography

**Display Font:** Young Serif (with Georgia, Times New Roman, serif)
**Body Font:** Hanken Grotesk Variable (with ui-sans-serif, system-ui, sans-serif)

**Character:** A chunky, soft, single-weight serif sets the room names; a quiet, regular-weight grotesk carries everything that is read. All h1 to h4 use the serif at weight 400 with balanced wrapping.

### Hierarchy
- **Display** (400, clamp(2.75rem, 7.2vw, 6rem), 1.02, -0.03em): the hero headline only, max 16ch.
- **Headline** (400, clamp(2.25rem to 2.5rem, 5vw to 5.5vw, up to 4.25rem to 4.75rem), 1.02-1.08): section titles; the contact title steps larger.
- **Title** (400, 1.25rem to 2.25rem): service and row names, contact details, form success heading.
- **Body** (400, 1rem to 1.25rem, 1.6): paragraphs, max line length 68ch (the measure utility) or narrower per block (40-46ch).
- **Label** (600, 0.75rem, 0.14em, uppercase): table heads, category tags, stat strip, footer headings, tile captions.

### Named Rules
**The One Serif Rule.** Lettering is Young Serif at regular weight; emphasis comes from size and colour, never faux bold or italic.

## Layout

A 12-column grid with a 3px gap where tiles abut (hero, contact) and wide gaps (48-64px) where sections breathe. Content max-width is 1400px (hero 1600px, process path 1100px) with 20px side gutters on mobile and 32px from md. Sections use 96px vertical padding on mobile and 144px from md. The hero is a bone reading panel across columns 1-8, a photo and pattern column across 9-12, and a stat strip under the panel; on mobile it stacks panel, then tiles, then strip. The navbar is fixed at 64px with a 3px ink bottom border, and scroll-padding accounts for it. Touch targets are 44px minimum, buttons 48px. Pricing and the process path restructure to stacked rows on mobile.

## Elevation & Depth

Flat. There are no box-shadows in the build. Depth is conveyed by tonal change between green ground and bone panels and by 3px ink grout lines. The only layering effects are the scroll-revealed entrance (opacity and 28px rise) and the process spine that is clipped open as the visitor scrolls.

### Named Rules
**The Flat Floor Rule.** A floor has no shadows. Hierarchy comes from panel colour and grout, never blur or lift.

## Shapes

Square everywhere (0px radius), including inputs, buttons, photographs, number badges and the success mark; form controls explicitly reset to 0. Borders are structural: 3px ink for grout and the navbar edge, 2px for button outlines and the process badge border at larger sizes, 1px ink around small tile chips. Tegel motifs are 96px square modules (diamond, concentric squares, eight-point star, four-leaf) with a faint inner hairline joint, tiled as backgrounds and sized down to 26-40px for chips and the process spine. Photograph treatment: square corners, sitting in the tile grid or on a bone field with a 3px ink joint, filling the tile with cover cropping over the photo's average colour as ground while it loads.

## Components

### Buttons
- **Shape:** square (0px), 48px minimum height, 2px transparent border, 15px semibold text.
- **Primary (botol):** bottle-green fill, bone text, on bone panels; hover fills ink.
- **Ochre:** ochre fill, ink text, the nav CTA on green; hover fills bone.
- **Line:** 2px currentColor outline; hover fills ink with bone text.
- **Motion:** 250ms ease-out-expo on colour, 1px press-down on active. Focus is a 2px ochre outline offset 3px.

### Tegel Tile
A decorative square generated from a pattern and palette. Used at 96px for grounds and the hero pattern tile, at 40px as the row marker in pricing and 32px in the logo and process badges. Always aria-hidden.

### Inputs / Fields
- **Style:** transparent field with a 2px bottom border (ink at 35%), 56px minimum height, floating label scaling to 75% on focus or fill.
- **Focus:** the bottom border turns oxblood and the label takes oxblood.
- **Placement:** forms sit on a bone panel inside an ink grout container.

### Navigation
Fixed 64px botol-deep bar with a 3px ink lower edge. Logo is a 32px kunci tile plus the serif name. Links are 14px medium grotesk with ochre hover; on mobile the menu opens full screen in 36px serif. The ochre CTA stays visible at all widths.

### Table (Pricing)
Bone panel, 3px ink header rule, 1px ink at 25% row rules, bone-dim hover, a 40px tegel marker per row, tabular numerals for price and time.

## Do's and Don'ts

### Do:
- **Do** keep every corner square (0px) and let a container's ink background plus a 3px gap draw the joints.
- **Do** put reading text on bone in ink, or on green in bone at 80% or more opacity.
- **Do** draw tegel motifs from `src/lib/tegel.ts`; add new motifs only as mirror-symmetric shapes in the existing palettes.
- **Do** place photographs as square tiles over their average colour, with an ink joint, and keep alt text from the image slot data.
- **Do** keep the ochre focus ring (2px, 3px offset) and honour reduced motion for every animated entrance.

### Don't:
- **Don't** use shadows, blur or rounded corners to create depth; the floor is flat.
- **Don't** put a tegel pattern behind body text.
- **Don't** use indigo for text or surfaces; it is tile colour.
- **Don't** set display type in anything but Young Serif at regular weight.
- **Don't** introduce a second accent beside ochre for actions or return to a cream ground.
