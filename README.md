# Brackenmere Website v2

Static GitHub Pages site.

## Core files
- `index.html`
- `style.css`
- `script.js`
- `.nojekyll`
- `assets/`

## NEW ASSETS TO GENERATE

### Entry / framing
1. `assets/gate-background.png`
   - 1920 × 1080
   - Wide academy / magical wilderness background for entry screen.
   - Keep center relatively quiet so the parchment access card remains readable.

2. `assets/brackenmere-crest.png`
   - 600 × 600
   - Transparent PNG.
   - Academy crest / emblem; practical old-school botanical magic feel.

3. `assets/vine-border.png`
   - 144 × 1400
   - Transparent PNG.
   - Seamless-ish vertical vine ornament; artwork concentrated near centerline so it can repeat vertically.
   - Used on both screen edges.

4. `assets/corner-vine.png`
   - 300 × 300
   - Transparent PNG.
   - Decorative curling vine for parchment corners.

5. `assets/small-leaf-ornament.png`
   - 200 × 200
   - Transparent PNG.
   - Small botanical flourish for cards.

### Main site art
6. `assets/hero-brackenmere.png`
   - 1600 × 1000
   - Main Brackenmere academy key art.

7. `assets/location-brackenmere-academy.png`
   - 1600 × 1000
   - Academy exterior / campus reference.

### Music
8. `assets/music/brackenmere-theme.mp3`
   - Looped site theme.
   - Entry button provides the user interaction browsers need before playback.

### Yearbook portraits
Each living character uses:
- `assets/yearbook-SLUG.png`
  - Recommended 600 × 800
  - Yearbook-style portrait / waist-up or chest-up.
- `assets/reference-SLUG.png`
  - Recommended 900 × 1200
  - Existing full reference art.

Slugs:
- tansy-wren
- poppy-rake
- lilac-morrow
- nettie-foss
- sorrel-ashdown
- mallow-croft
- clement-quirk
- juniper-tallow
- cecily-knell
- bram-rill
- etta-crow
- moss-bell
- finch-dapple
- lark-sallow
- nibs-harrow
- toby-wicker
- professor-brindle
- master-thicket
- headmistress-hollowmere
- hester-pike
- professor-marda-sedge
- ash

### Creature Field Guide
Each image: 900 × 700 PNG
- `assets/creature-organ-melting-willow.png`
- `assets/creature-friendly-blobble.png`
- `assets/creature-sleeper-moss.png`
- `assets/creature-false-door-beetle.png`
- `assets/creature-probably-harmless-toad.png`
- `assets/creature-child-eating-daffodil.png`
- `assets/creature-two-bite-hare.png`
- `assets/creature-house-screamer.png`

### In Memoriam portraits
Each image: 800 × 600 PNG, ideally faux yearbook photos
- `assets/memorial-petra-broom.png`
- `assets/memorial-oswin-crumb.png`
- `assets/memorial-maribel-fen.png`
- `assets/memorial-tuck-sallow.png`

## GitHub Pages
Upload everything to the repository root.
Settings → Pages → Deploy from a branch → main → / (root)

Missing images gracefully fall back to labeled placeholders.


## Deceased students in the Students section

The Students page now includes the four memorial students directly in the yearbook grid.
They are automatically greyed out and marked `DECEASED`.

They reuse the memorial portrait files rather than requiring a second yearbook portrait:
- `assets/memorial-petra-broom.png`
- `assets/memorial-oswin-crumb.png`
- `assets/memorial-maribel-fen.png`
- `assets/memorial-tuck-sallow.png`

The separate In Memoriam page remains as the dedicated archive, while the Students page makes the losses visible alongside the current class.


## v4 changes

### Students
The Students page is now sorted automatically by **surname**, then by full name for ties.
Living and deceased students are mixed together in the same alphabetical yearbook order.

### Local Community
Three future community-member slots have been added alongside Ash:
- `assets/community-placeholder-01.png`
- `assets/community-placeholder-02.png`
- `assets/community-placeholder-03.png`

You do **not** need to generate these now. If missing, they intentionally render as styled TBD placeholders.
When a community member is decided, replace the placeholder entry in `script.js` with the real name/details and use the normal art naming convention.
