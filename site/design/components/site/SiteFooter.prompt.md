Bottom of every page. Three columns: Product, Docs, Legal.

```jsx
<SiteFooter repoUrl="https://github.com/HutsonLabs/term.hut-releases"
  columns={[{title:'Product',links:[{label:'Features'},{label:'Download'},{label:'Changelog'}]}]} />
```

The mark sits at 44px here (24px in the header). Column heads are 10px mono uppercase.

`repoUrl` adds a 16px `tabler:brand-github` icon link beneath the bundle id — the one outbound link in the footer.
