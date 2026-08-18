Use for any clickable action on the site; exactly one `primary` per view.

```jsx
<Button href="https://github.com/HutsonLabs/term.hut-releases/releases" meta="5.4 MB · dmg">Download for macOS</Button>
<Button variant="secondary">Read the docs</Button>
<Button variant="ghost" size="sm">changelog →</Button>
<Button variant="secondary" size="sm" disabled>Intel build — none</Button>
```

Variants: `primary` (peach fill, crust label), `secondary` (bordered, transparent), `ghost` (mono, no border). Sizes lg/md/sm = 52/48/44px. Put factual detail — size, architecture — in `meta`, not in copy beneath the button. Disabled is never filled.
