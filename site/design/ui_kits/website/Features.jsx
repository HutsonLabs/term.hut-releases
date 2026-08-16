const { SectionHeading, ScreenshotFrame, CodeBlock, Callout, Badge, Icon } = window.TermHutDesignSystem_6c66e0;

const SECTIONS = [
  { n: '01', icon: 'sparkles', title: 'Detached agents',
    body: 'A session is not a child process. It runs behind a FIFO in ~/.term-hut/agents/<id>/ on whichever host owns it — the app is a viewer, not the owner. Closing the window detaches and the stream keeps appending; reopening replays it, then follows.',
    note: 'agent state outlives the window' },
  { n: '02', icon: 'folder-plus', title: 'Anchored workspaces',
    body: 'A project is a directory bound to its own session, terminal, editor and branch. Switching the anchor switches all four at once, so there is no state to reconcile by hand.',
    note: 'one anchor, four surfaces' },
  { n: '03', icon: 'list-tree', title: 'One surface',
    body: 'Terminal, file tree, LSP editor and agent chat are panes in a single window sharing one state tree. A file opened by the agent is the file the editor shows.',
    note: 'panes, not apps' }
];

function Features() {
  return (
    <Page>
      <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)', paddingTop: 'var(--s-16)' }}>
        <h1 style={{ margin: 0, fontSize: 'var(--display-l)', lineHeight: 'var(--display-l-lh)', letterSpacing: 'var(--display-l-ls)', fontWeight: 600 }}>Features</h1>
        <p style={{ margin: 0, fontSize: 'var(--body-lead)', lineHeight: 'var(--body-lead-lh)', color: 'var(--ink-muted)', maxWidth: 'var(--measure-lead)' }}>
          One section per mechanism, and the reason it works that way.
        </p>
      </header>

      {SECTIONS.map((s) => (
        <section key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
          <SectionHeading number={s.n} title={s.title} note={s.note} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gutter)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)', minWidth: 0 }}>
              <span style={{ color: 'var(--ink)', display: 'flex' }}><Icon name={s.icon} size={26} /></span>
              <p style={{ margin: 0, fontSize: 'var(--body)', lineHeight: 'var(--body-lh)', color: 'var(--ink-muted)', maxWidth: 'var(--measure-body)' }}>{s.body}</p>
              {s.n === '01' ? <Callout tone="info" label="note">Auth is inherited from your own <span className="thut-chip">claude</span> CLI credentials. term.hut contains no Anthropic auth code.</Callout> : null}
              {s.n === '02' ? <CodeBlock language="zsh"><div><span className="thut-code__prompt">$</span> hut anchor add ~/src/api --branch main</div><div className="hl-cmt"># binds session, terminal, editor and branch</div></CodeBlock> : null}
              {s.n === '03' ? <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><Badge tone="remote">ssh</Badge><Badge>xterm.js</Badge><Badge>CodeMirror</Badge></div> : null}
            </div>
            <ScreenshotFrame title={'term.hut — ' + s.title.toLowerCase()} height={220}
              placeholder={<span>{s.title.toLowerCase()} screenshot<br />none shipped yet</span>} />
          </div>
        </section>
      ))}
    </Page>
  );
}
Object.assign(window, { Features });
