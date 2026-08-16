# term.hut design system

**term.hut** is a macOS-only terminal workspace from **HutsonLabs** (bundle id
`com.hutsonlabs.termhut`). It puts a terminal, a file tree, an LSP editor and a Claude Code
session in one window, bound to a directory. Its two load-bearing mechanisms are *anchored
workspaces* (a directory binds its own session, terminal, editor and branch) and *detached
agents* (a Claude session runs behind a FIFO on the host that owns it, so closing the app
detaches rather than kills). Tauri + Rust shell; xterm.js, CodeMirror, Rough.js and
perfect-freehand vendored in the webview. Distributed as a signed, notarized aarch64 dmg
(5.4 MB at v0.9.4) through an assets-only releases repo. No Intel build, no Windows, no
Linux, no hosted anything.

This design system covers **one product surface: the marketing + docs website**
(`termhut.hutsonlabs.com`). The app's own chrome is upstream of it — the site inherits the
app's palette, stacks and radii, and adds what a page needs (a display scale, a grid,
section patterns, imagery treatment).

## Sources given

- `uploads/term.hut Design System.dc.html` — a 23-section website design specification for
  term.hut, written against the app's own `ui/index.html` `:root` block and
  `ui/src/themes.js`. **This file is the ground truth for everything here**; every value in
  `tokens/` is read out of it.
- `uploads/term.hut Design System/` — the three shipped brand files: `favicon.svg`,
  `icons/icon-full.svg`, `icons/og.svg`, copied into `assets/`.
- Referenced but **not provided** (kept here in case a reader has access):
  `github.com/HutsonLabs/term.hut` (private source: `README.md`, `PRODUCT.md`, `docs/*.md`,
  `ui/src/themes.js`, `ui/src/editor.js`, `ui/src/codeBlocks.js`, `ui/src/fontloader.js`),
  and `github.com/HutsonLabs/term.hut-releases/releases` (the assets-only download feed).
  No Figma file was provided.

Because the app codebase was not attached, **no app UI kit exists here** — the app's screens
are described secondhand in the spec but never shown, and recreating them from prose would
be invention. The website kit is built from the spec's own page patterns.

---

## CONTENT FUNDAMENTALS

The voice is the app README's: precise, technical, reasons stated, tradeoffs named. Copy
states a mechanism and lets the reader draw the benefit.

- **Person.** Second person for the reader — "your machine", "the credentials your `claude`
  CLI already holds". First person plural only for decisions and intent ("we decided the
  site is dark-only"), and sparingly: a mechanism rarely needs an author. Never "the user",
  never "developers", never "one".
- **Casing.** Sentence case everywhere — headings, buttons, nav, labels. The only uppercase
  is the 11px mono eyebrow (`letter-spacing: .08em`). The product name is **always**
  `term.hut`: lowercase, with the dot, even at the start of a sentence. Never Term.hut,
  TermHut, or term.hut™.
- **Sentence shape.** Short declaratives that name a thing. "A session is not a child
  process. It runs behind a FIFO in `~/.term-hut/agents/<id>/` on whichever host owns it."
  Numbers are specific and checkable: 5.4 MB, aarch64, macOS 12+, 2h 14m, 1.4k lines.
- **Say what it declines to do.** "term.hut contains no Anthropic auth code." "No Intel
  build, no Windows, no Linux." Refusals are content, not disclaimers.
- **Banned words** — if a sentence needs one, it has no mechanism in it: seamless, powerful,
  supercharge, effortless, AI-powered, revolutionary, blazing fast, game-changing, unleash,
  simply.
- **Never invent** users, download counts, testimonials, press, benchmarks, a Homebrew tap,
  an Intel build, or a public source mirror. None exist.
- **Emoji: never.** Not in copy, not in headings, not in the changelog. Unicode is used for
  exactly three marks, all inside mono contexts: `$` (prompt), `✓` (success line in a
  terminal transcript), `→` (a trailing "how it works →" or "changelog →").
- **Vocabulary** (the words a second writer gets wrong): a *workspace*, not an IDE. A
  *project* is the anchored directory. *persistent* sessions, not "background". An *agent* is
  the running thing; a *session* is its transcript and state. *Claude*, not "the model".
  *panes*, not panels or tabs. *remote / over SSH*, never "cloud" or "hosted".
- **Unresolved collision.** The repo says "anchored workspaces" and "detached agents" — in
  `README.md`, `PRODUCT.md`, two docs filenames and the UI strings — while the vocabulary
  table prefers "project" and "persistent". Since docs slugs derive from those filenames,
  pick one: rename in the repo with redirects, or keep the repo's words as the technical
  terms and use the others only in marketing copy.
- **Micro-copy examples.** Primary button: `Download for macOS` + mono meta `5.4 MB · dmg`.
  404: `$ cd /that-page` → `no such file or directory`. Empty feed: `No releases yet.` +
  the reason. Privacy page, in full: "This site collects nothing… there is no us to send it
  to." Alt text describes what a window is *doing*, not what it contains.

---

## VISUAL FOUNDATIONS

**Ground.** Catppuccin Mocha, dark only — the site declares `color-scheme: dark` in the head
and there is no light appearance. The site *inverts* the app's ladder: `--page` is mantle
(`240 21% 12%`), `--card` is base (`240 21% 15%`), `--well` is crust (`240 23% 9%`), so cards
lift off the page instead of sinking into it. Raised interaction ground is surface0.

**Ink.** text → subtext1 → subtext0 → overlay2, in that order of prominence. Body copy is
subtext1 at 16/1.65 capped at 68ch; labels are overlay2 (`--ink-dim`). Overlay1 is demoted to
decoration — it measures 4.33:1 on a card and every label here is 11px, so it fails AA.

**Accent.** Two, with a hard split. The **mark peach** `hsl(17 63% 61%)` — the literal stroke
color of the `>_` glyph in `favicon.svg` — carries download buttons, links, section numbers
and one accent line per hero; hover lifts it to `ctp-peach`. **Mauve** is the app's accent and
stays on interaction only: focus rings, text selection at 25%, the active docs row. Never a
marketing surface. Signal colors keep their app meanings: green shipped, yellow caveat, red
breaking, blue info, teal SSH/remote.

**Type.** Two stacks, no display webfont. UI/display is `'Avenir Next', -apple-system,
BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif` — the audience is on macOS, so most
visitors see the same face the app uses and there is no layout shift and nothing to host.
Mono is `'Maple Mono', 'SF Mono', Menlo, monospace`, self-hosted OFL web build at 400/500/700.
Scale: display/xl 76 (one per page, `-0.025em`), display/l 44, title/l 28, lead 19/1.55, body
16/1.65, mono 14/1.6, micro 11 uppercase. On mobile the display sizes drop (76→40, 44→30,
28→22) and body **never** goes below 16.

**Spacing and layout.** 4px base: 4, 8, 12, 16, 24, 40, 64, 96. Card padding 24, grid gutter
24, in-card stack gap 12, between sections 96 (120 around a hero). 12 columns, 1120 max
content, 40 page padding (32 at 1024–1199, 20 below 768), 720 prose measure, 200 docs sidebar
/ 130 on-page contents. Four breakpoints; the phone is the default, not the fallback. Fixed
elements: the docs sidebar and on-page contents are sticky; the header is not.

**Corners and edges.** 5 chip, 8 button, 12 card, 16 screenshot frame, pill for badges.
**No shadows anywhere** — the app has none, and depth comes from the mantle/base/crust ladder
plus 1px hairlines (surface1 for card edges at 1.80:1, overlay0 for controls at 3.31:1). One
line at a time: never a border and an outline together. A **dashed** overlay0 border marks a
*state* (empty feed, failed fetch), not a card.

**Cards.** Base ground, 1px hairline, 12px radius, 24px padding, flat. Feature cards swap the
flat hairline for gradient C.

**Gradients — exactly three, approved 2026-08-15.** A: ground fade, mantle → crust down the
page, a 3% lightness drift. B: hero bloom, peach at 10% radial from the top edge behind the
mark, once per site. C: card edge, a 1px overlay0 → surface0 border on feature cards, greys
only. Nothing above 10% alpha, no new hues. Hue-shifting washes and gradient text are vetoed
by name.

**Transparency and blur.** Tints only: 8% for callout grounds, 12% for badge fills, 25% for
text selection, 5% for the zebra row stripe (`--row-stripe`, the app's own value). **No blur,
no frosted glass, anywhere** — no backdrop-filter appears in the source.

**Imagery.** Real app screenshots in a frame that reproduces the app's own overlay titlebar
(three dots, mantle bar, 16px radius), so a screenshot reads as the Mac app it is. No
perspective, no floating device art, no light hero. Cool, dark, unretouched, no grain and no
color grading — the screenshot is the product's own pixels. None have shipped yet, so frames
show a hatched placeholder rather than a mockup. No illustration, no stock photography, no
generated imagery. AVIF or WebP, ≤200 KB, capped at 2x the layout slot.

**Motion.** One curve for the whole site: `cubic-bezier(.2 0 .2 1)`. 120ms for color and
border on hover (the default), 180ms for a disclosure the user opened, 240ms for the mobile
nav sheet and nothing else. No delays — staggered reveals are scroll animation in disguise.
What may move: color, border-color, opacity, the 1px active translate, disclosure height, and
the single in-flight spinner on the release fetch. What never moves: anything triggered by
scroll (entrances, parallax, counters, pinning), page transitions, autoplaying video, looping
product animation. Under `prefers-reduced-motion` every duration collapses to 0.01ms and every
iteration to 1, the spinner exempted — a frozen spinner reads as a hang.

**States.** Hover: one step lighter on the same hue (peach → ctp-peach); secondary fills to
surface0 and its border lifts to overlay2; ghost text turns peach. Press: one step darker plus
`translateY(1px)` — no scale, ever. Focus-visible: a bordered control promotes its **own**
border to 2px mauve (no offset ring); borderless targets — nav items, docs rows, the mark —
get the 2px mauve outline at 2px offset instead. Disabled: hairline border, overlay0 text,
`not-allowed`, never a filled button. Links do not change on visit: no purple, ever, because
docs get revisited constantly. 44px minimum target on everything clickable.

**Print.** Docs invert to warm white (`45 12% 97%`), ink to 12%L, syntax color drops
entirely, nav/footer/buttons/screenshots/gradients are dropped, and the running head gains
the source URL and retrieval date. 11pt body, 10pt mono — points, not pixels.

---

## ICONOGRAPHY

- **One set: Tabler outline**, taken via iconify.design — the app's set, unchanged. A second
  family reads as a different product.
- 24×24 viewBox, `stroke-width: 2` with round cap and join, `currentColor`, **never a fill**.
  Keep stroke 2 at every size; do not optically thin them.
- Sizes: **16** inline, **20** nav, **26** feature.
- **No icon font, no sprite request.** In production the rule is to inline the SVG so it
  inherits `currentColor`. The `Icon` component here loads the Iconify web component from CDN
  (`code.iconify.design/iconify-icon@2.1.0`) so cards and kits can name glyphs by string —
  ⚠️ **substitution note:** the repo's own icon files were not provided, so glyphs come from
  the upstream Tabler set over CDN rather than from vendored SVGs. If the repo vendors its own
  copies, drop them into `assets/icons/tabler/` and switch `Icon` to inline them.
- Icons named in the source and used here: `list-tree` (file tree, anchored workspaces),
  `git-branch` (branches, worktrees), `sparkles` (anything the agent does), `file-plus`
  (editor, file actions), `folder-plus` (directories, anchors), `dots` (overflow).
- Signal colors carry the same meaning on icons as elsewhere: teal for remote, peach for the
  agent.
- An icon in marketing copy earns its place by naming a real surface — tree, branch, agent —
  never as decoration.
- **Emoji are never used as icons.** Unicode marks are limited to `$`, `✓`, `→` in mono
  contexts. The app also vendors Catppuccin file-type icons; those were not provided and are
  not part of the website system.

## Brand assets

`assets/favicon.svg` — the rounded tile with the peach `>_`; tab, header (24px), footer
(44px), minimum 16px. It carries its own dark ground, so it never needs a container.
`assets/icons/icon-full.svg` — full-bleed maskable icon for the manifest, apple-touch-icon and
Android launcher; never on a page. `assets/icons/og.svg` — source for the 1200×630 `og.png`
used on every page. Clear space is a quarter of the tile on every side. Never recolor the
glyph or tile, never put the tile on a peach or light ground, never add a wordmark inside it.
No new marks were drawn for this system.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | global entry — `@import` list only |
| `tokens/` | `palette` · `semantic` · `typography` · `space` · `motion` · `syntax` · `print` · `fonts` |
| `components/components.css` | interaction states for the `.thut-*` classes (hover/press/focus) |
| `components/core/` | Button, Badge, CodeChip, Eyebrow, SectionHeading, Card, Input, Icon, SkipLink |
| `components/content/` | CodeBlock, Callout, ScreenshotFrame, EmptyState, Prose |
| `components/site/` | SiteHeader, SiteFooter, FeatureCard, DocsNav, ChangelogEntry |
| `ui_kits/website/` | click-through recreation: home, features, docs, changelog, privacy |
| `guidelines/*.card.html` | 23 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `assets/` | favicon.svg, icons/icon-full.svg, icons/og.svg |
| `SKILL.md` | Agent Skills front matter for use outside this project |

**Component inventory** is exactly the families §07 and §12–§17 of the source define:
buttons, badges and inline code chips, site header, feature cards, code blocks, screenshot
frames, docs nav, callouts, changelog entries, footer, text inputs, empty states, docs prose.

**Intentional additions** (not in the source, added to make the above usable):
- `Icon` — a wrapper over the Tabler set, so glyph name / size / color rules are enforced in
  one place instead of copied per SVG.
- `Eyebrow`, `SectionHeading`, `Card`, `SkipLink`, `Prose` — the source shows all five as
  repeated markup patterns rather than named components; they are lifted verbatim, no new
  visual decisions.

**Open questions the source flags** (unchanged, carry them forward): pricing, licensing and
distribution terms; whether a light appearance ever ships; product screenshots (none exist);
whether the site is hand-written or generated; and the anchored-workspaces / detached-agents
vocabulary collision above.
