const { Button, Badge, FeatureCard, ScreenshotFrame, CodeBlock, Eyebrow, SectionHeading } = window.TermHutDesignSystem_6c66e0;

function Home({ go }) {
  return (
    <Page>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)', alignItems: 'flex-start',
        background: 'var(--grad-bloom)', margin: '0 calc(-1 * var(--page-pad))', padding: 'var(--rhythm-hero) var(--page-pad) var(--s-16)' }}>
        <img src="../../assets/favicon.svg" alt="term.hut" width="56" height="56" style={{ display: 'block' }} />
        <h1 style={{ margin: 0, fontSize: 'clamp(40px,7vw,76px)', lineHeight: 1.15, letterSpacing: 'var(--display-xl-ls)', fontWeight: 600, maxWidth: '18ch' }}>
          A local, agent-aware terminal.
        </h1>
        <p style={{ margin: 0, fontSize: 'var(--body-lead)', lineHeight: 'var(--body-lead-lh)', color: 'var(--ink-muted)', maxWidth: 'var(--measure-lead)' }}>
          Terminal, file tree, LSP editor and Claude share state in one window. Sessions run behind a FIFO on the host that owns them, so closing the app detaches instead of killing them.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-3)', alignItems: 'center' }}>
          <Button href="https://github.com/HutsonLabs/term.hut-releases/releases" meta="5.4 MB · dmg">Download for macOS</Button>
          <Button variant="secondary" onClick={() => go('/docs')}>Read the docs</Button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Badge>v0.9.4</Badge><Badge tone="ok">signed &amp; notarized</Badge><Badge tone="warn">macOS 12+</Badge><Badge tone="remote">ssh</Badge>
        </div>
      </section>

      <ScreenshotFrame title="term.hut — ~/src/term.hut" height={380}
        placeholder={<span>app screenshot<br />1600×1000 · 2x · real window, no mockup<br />none shipped yet</span>} />

      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
        <SectionHeading number="01" title="Three mechanisms" note="stated as mechanisms, not benefits" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gutter)' }}>
          <FeatureCard number="01" title="Detached agents" href="/docs/detached-agents">Claude sessions aren't child processes. Closing the app detaches; reopening re-attaches and replays the stream.</FeatureCard>
          <FeatureCard number="02" title="Anchored workspaces" href="/docs/anchored-workspaces">A directory binds its own session, terminal, editor and branch. Switch the anchor, switch all of it.</FeatureCard>
          <FeatureCard number="03" title="One surface" href="/docs/panes">Terminal, tree, LSP editor and agent chat share state in a single window instead of juggled apps.</FeatureCard>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gutter)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)', minWidth: 0 }}>
          <Eyebrow>Attach from the shell</Eyebrow>
          <CodeBlock language="zsh">
            <div><span className="thut-code__prompt">$</span> hut open ~/src/term.hut</div>
            <div className="hl-cmt"># anchors the repo, attaches its session</div>
            <div><span style={{ color: 'var(--ok)' }}>✓</span> agent <span style={{ color: 'var(--remote)' }}>a7f3</span> re-attached <span style={{ color: 'var(--ink-soft)' }}>(2h 14m, 1.4k lines)</span></div>
          </CodeBlock>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)', minWidth: 0 }}>
          <Eyebrow>What it declines to do</Eyebrow>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 'var(--body-s)', lineHeight: 1.7, color: 'var(--ink-muted)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>No Anthropic auth code — it uses the credentials your <span className="thut-chip">claude</span> CLI already holds.</li>
            <li>No Intel build, no Windows, no Linux. aarch64 only.</li>
            <li>No analytics, no cookies, no third-party scripts.</li>
          </ul>
        </div>
      </section>
    </Page>
  );
}
Object.assign(window, { Home });
