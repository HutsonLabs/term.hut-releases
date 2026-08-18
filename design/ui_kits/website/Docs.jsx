const { DocsNav, Prose, CodeBlock, Callout, Input, CodeChip } = window.TermHutDesignSystem_6c66e0;

const GROUPS = [
  { title: 'Concepts', items: [
    { slug: 'anchored-workspaces', label: 'Anchored workspaces' },
    { slug: 'detached-agents', label: 'Detached agents' },
    { slug: 'persistent-shells', label: 'Persistent shells' },
    { slug: 'ssh-remotes', label: 'SSH remotes' }
  ]},
  { title: 'Protocol', items: [
    { slug: 'event-stream', label: 'Event stream' },
    { slug: 'slash-commands', label: 'Slash commands' }
  ]}
];

const PAGES = {
  'detached-agents': {
    title: 'Detached agents',
    lead: <>A session is not a child process. It runs behind a FIFO in <CodeChip>~/.term-hut/agents/&lt;id&gt;/</CodeChip> on whichever host owns it.</>,
    toc: ['Attach and detach', 'Event stream'],
    quote: 'The app is a viewer, not the owner.'
  },
  'anchored-workspaces': {
    title: 'Anchored workspaces',
    lead: <>A project is a directory bound to its own session, terminal, editor and branch. Switch the anchor and all four follow.</>,
    toc: ['Adding an anchor', 'Worktrees'],
    quote: 'One anchor owns one repo, local or over SSH.'
  },
  'persistent-shells': { title: 'Persistent shells', lead: <>Shells survive a window close: the pty stays alive on the host and its scrollback is replayed on reattach.</>, toc: ['Lifetime', 'Scrollback'], quote: 'A shell is state, not a view.' },
  'ssh-remotes': { title: 'SSH remotes', lead: <>A remote project is not a lesser mode. term.hut uses your own SSH config; nothing is hosted.</>, toc: ['Config', 'Agent placement'], quote: 'Your keys, your hosts.' },
  'event-stream': { title: 'Event stream', lead: <>Every pane reads one NDJSON stream per agent. Lines are append-only and replayable from byte zero.</>, toc: ['Line shape', 'Replay'], quote: 'Append-only, so replay is just reading.' },
  'slash-commands': { title: 'Slash commands', lead: <>Commands are forwarded to the Claude Code CLI verbatim, so anything the CLI accepts works here.</>, toc: ['Forwarding', 'Naming'], quote: 'No second command layer.' }
};

function Docs({ slug = 'detached-agents', onSelect }) {
  const page = PAGES[slug] || PAGES['detached-agents'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'var(--docs-sidebar) minmax(0,1fr) var(--docs-toc)', gap: 'var(--gutter)', paddingTop: 'var(--s-10)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)', position: 'sticky', top: 'var(--s-6)' }}>
        <Input placeholder="Search the docs" />
        <DocsNav groups={GROUPS} current={slug} onNavigate={onSelect} />
      </div>

      <Prose as="article" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
        <h1 style={{ margin: 0, fontSize: 'var(--display-l)', lineHeight: 'var(--display-l-lh)', letterSpacing: 'var(--display-l-ls)', fontWeight: 600, color: 'var(--ink)' }}>{page.title}</h1>
        <p>{page.lead}</p>
        <h4 id="s1">{page.toc[0]}</h4>
        <ol style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <li>Closing the window detaches. The stream keeps appending.</li>
          <li>Reopening re-attaches, replays, then follows.</li>
        </ol>
        <blockquote>{page.quote}</blockquote>
        <CodeBlock language="zsh">
          <div><span className="thut-code__prompt">$</span> hut agents</div>
          <div>a7f3 <span style={{ color: 'var(--ok)' }}>attached</span> ~/src/term.hut <span style={{ color: 'var(--ink-soft)' }}>2h 14m</span></div>
          <div>b1c9 <span style={{ color: 'var(--ink-dim)' }}>detached</span> ~/src/api <span style={{ color: 'var(--ink-soft)' }}>17m</span></div>
        </CodeBlock>
        <h4 id="s2">{page.toc[1]}</h4>
        <table>
          <thead><tr><th>event</th><th>source</th><th>payload</th></tr></thead>
          <tbody>
            <tr><td style={{ color: 'var(--ink)' }}>claude://message</td><td>claude.rs</td><td>NDJSON line</td></tr>
            <tr><td style={{ color: 'var(--ink)' }}>pty://output</td><td>main.rs</td><td>raw bytes</td></tr>
            <tr><td style={{ color: 'var(--ink)' }}>fs://changed</td><td>watcher.rs</td><td>path list</td></tr>
          </tbody>
        </table>
        <Callout tone="info" label="note">Auth is inherited from your own <CodeChip>claude</CodeChip> CLI credentials. term.hut contains no Anthropic auth code.</Callout>
      </Prose>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'sticky', top: 'var(--s-6)' }} aria-label="On this page">
        <div className="thut-eyebrow">On this page</div>
        {page.toc.map((t, i) => <a key={t} className="thut-link" style={{ fontSize: 'var(--body-2xs)', borderBottom: 0, color: i === 0 ? 'var(--accent)' : 'var(--ink-muted)' }} href={'#s' + (i + 1)}>{t}</a>)}
      </nav>
    </div>
  );
}
Object.assign(window, { Docs });
