Wraps a rendered docs page. Sets the 720px measure, 16/1.7 body, heading sizes, blockquote rule, zebra tables.

```jsx
<Prose as="article"><h3>Detached agents</h3><p>A session is not a child process…</p></Prose>
```

Zebra rows use the app's own `--row-stripe`. Tables never get vertical rules. Body copy stays 16px at every breakpoint.
