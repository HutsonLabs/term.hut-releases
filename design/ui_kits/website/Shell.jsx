const { SiteHeader, SiteFooter, SkipLink, Button } = window.TermHutDesignSystem_6c66e0;

const NAV = [
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
  { href: '/changelog', label: 'Changelog' }
];

const FOOTER = [
  { title: 'Product', links: [{ label: 'Features' }, { label: 'Download' }, { label: 'Changelog' }] },
  { title: 'Docs', links: [{ label: 'Anchored workspaces' }, { label: 'Detached agents' }, { label: 'SSH' }] },
  { title: 'Legal', links: [{ label: 'License' }, { label: 'Privacy' }] }
];

function Shell({ route, go, children, ground }) {
  return (
    <div style={{ minHeight: '100%', background: ground || 'var(--grad-ground)', display: 'flex', flexDirection: 'column' }}>
      <SkipLink />
      <SiteHeader current={route} items={NAV} mark="../../assets/favicon.svg" onNavigate={go}
        action={<Button variant="ghost" size="sm" onClick={() => go('/')}>download</Button>} />
      <main id="main" style={{ flex: 1, width: '100%', maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--page-pad) var(--rhythm-section)', boxSizing: 'border-box' }}>{children}</main>
      <SiteFooter mark="../../assets/favicon.svg" columns={FOOTER} repoUrl="https://github.com/HutsonLabs/term.hut-releases" />
    </div>
  );
}

function Page({ children, gap = 'var(--rhythm-section)' }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap, paddingTop: 'var(--s-16)' }}>{children}</div>;
}

Object.assign(window, { Shell, Page, NAV, FOOTER });
