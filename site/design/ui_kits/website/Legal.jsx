const { Card, Eyebrow } = window.TermHutDesignSystem_6c66e0;

function Legal() {
  return (
    <Page>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'var(--gutter)', paddingTop: 'var(--s-16)', alignItems: 'start' }}>
        <Card variant="well" style={{ gap: 'var(--s-3)' }}>
          <h1 style={{ margin: 0, fontSize: 'var(--title-m)', fontWeight: 600 }}>Privacy</h1>
          <p style={{ margin: 0, fontSize: 'var(--body)', lineHeight: 'var(--prose-lh)', color: 'var(--ink-muted)' }}>This site collects nothing. No analytics, no cookies, no third-party scripts, no server logs kept beyond what the host needs to serve a file.</p>
          <p style={{ margin: 0, fontSize: 'var(--body)', lineHeight: 'var(--prose-lh)', color: 'var(--ink-muted)' }}>The app is the same. term.hut talks to your machine, your hosts over your own SSH, and the Claude Code CLI you already installed — using your credentials, which it never sees. Nothing is sent to us, because there is no us to send it to.</p>
          <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', color: 'var(--ink-dim)' }}>Downloads are served by GitHub Releases, which keeps its own logs.</p>
        </Card>
        <Card>
          <Eyebrow>License · placeholder, confirm before ship</Eyebrow>
          <p style={{ margin: 0, fontSize: 'var(--body-xs)', lineHeight: 1.7, color: 'var(--ink-muted)' }}>Proprietary, free to download, no source. The source repo is private and the releases repo is assets-only, so that is what is true today.</p>
          <p style={{ margin: 0, fontSize: 'var(--body-xs)', lineHeight: 1.7, color: 'var(--ink-muted)' }}>Vendored dependencies carry their own licenses: xterm.js, CodeMirror, Rough.js, perfect-freehand, Catppuccin icons, and Maple Mono under OFL.</p>
        </Card>
      </div>
    </Page>
  );
}
Object.assign(window, { Legal });
