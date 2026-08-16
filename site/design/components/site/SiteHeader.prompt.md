Top of every page.

```jsx
<SiteHeader current="/docs" items={[{href:'/features',label:'Features'},{href:'/docs',label:'Docs'},{href:'/changelog',label:'Changelog'}]}
  action={<Button variant="ghost" size="sm">download</Button>} />
```

Active item gets a 2px peach underline. `compact` gives the 56px mobile shell with a two-line hamburger (not three); the sheet it opens is full height, crust ground, one nav row per 52px.
