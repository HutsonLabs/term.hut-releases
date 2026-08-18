# UI kit — term.hut website

Click-through recreation of the five surfaces the design system defines: home, features,
docs, changelog, and the privacy page. Open `index.html`.

| File | Surface | Built from |
| --- | --- | --- |
| `Shell.jsx` | header + footer + skip link + page frame | §07 site header, §07 footer, §21 landmarks |
| `Home.jsx` | `/` — claim, download, one wide screenshot, three mechanisms | §08 home pattern, §10 gradient B |
| `Features.jsx` | `/features` — one section per mechanism | §18 routes, §07 feature cards |
| `Docs.jsx` | `/docs/<slug>` — 200 sidebar / 720 prose / 130 contents | §08 docs pattern, §13 docs prose |
| `Changelog.jsx` | `/changelog` — release feed | §07 changelog entry, §16 empty state |
| `Legal.jsx` | `/legal/privacy` — the whole page, verbatim | §22 privacy and legal |

## What is deliberately missing

- **App screenshots.** None exist yet, so every `ScreenshotFrame` shows its hatched
  placeholder. Do not substitute a mockup or a stock image.
- **Real release history.** Only 0.9.4 is known. Earlier releases show the empty state
  rather than invented entries.
- **The mobile nav sheet.** `SiteHeader compact` renders the 56px shell and the two-line
  hamburger; the sheet it opens is specified (full height, crust ground, 52px rows) but the
  source has no visual for it, so it is not drawn here.

Interactions are cosmetic: nav and docs sidebar switch views in React state, the download
button points at the real releases URL. No fetch, no persistence.
