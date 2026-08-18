const { ChangelogEntry, EmptyState, CodeChip, Badge, Eyebrow } = window.TermHutDesignSystem_6c66e0;

function Changelog() {
  return (
    <Page gap="var(--s-16)">
      <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)', paddingTop: 'var(--s-16)' }}>
        <h1 style={{ margin: 0, fontSize: 'var(--display-l)', lineHeight: 'var(--display-l-lh)', letterSpacing: 'var(--display-l-ls)', fontWeight: 600 }}>Changelog</h1>
        <p style={{ margin: 0, fontSize: 'var(--body-lead)', lineHeight: 'var(--body-lead-lh)', color: 'var(--ink-muted)', maxWidth: 'var(--measure-lead)' }}>
          Read from the releases feed. Nothing on this page is hand-written.
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Badge tone="ok">feed live</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--micro)', color: 'var(--ink-dim)' }}>github.com/HutsonLabs/term.hut-releases</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gutter)', maxWidth: 'var(--prose-max)' }}>
        <ChangelogEntry version="0.9.4" date="2026-08-02" label="added" asset="term.hut_0.9.4_aarch64.dmg · 5.4 MB"
          items={[
            <span key="a"><CodeChip>/btw</CodeChip> asks a side question without costing the turn.</span>,
            <span key="b">Chat tabs rename through the CLI's own <CodeChip>/rename</CodeChip>, so the name survives a restart.</span>
          ]} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
          <Eyebrow>Earlier releases</Eyebrow>
          <EmptyState title="Nothing earlier is published.">0.9.4 is the first release in the assets-only repo. The feed fills this list the moment another dmg is published — no entry is written by hand.</EmptyState>
        </div>
      </div>
    </Page>
  );
}
Object.assign(window, { Changelog });
