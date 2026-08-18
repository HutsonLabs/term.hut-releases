/* @ds-bundle: {"format":4,"namespace":"TermHutDesignSystem_6c66e0","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"CodeBlock","sourcePath":"components/content/CodeBlock.jsx"},{"name":"EmptyState","sourcePath":"components/content/EmptyState.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"ScreenshotFrame","sourcePath":"components/content/ScreenshotFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CodeChip","sourcePath":"components/core/CodeChip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SkipLink","sourcePath":"components/core/SkipLink.jsx"},{"name":"ChangelogEntry","sourcePath":"components/site/ChangelogEntry.jsx"},{"name":"DocsNav","sourcePath":"components/site/DocsNav.jsx"},{"name":"FeatureCard","sourcePath":"components/site/FeatureCard.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/site/SiteHeader.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"a1c1d2ae75a2","components/content/CodeBlock.jsx":"701e371fd6e8","components/content/EmptyState.jsx":"739cba54873e","components/content/Prose.jsx":"3f99ff7dde50","components/content/ScreenshotFrame.jsx":"030aa7e1a1d0","components/core/Badge.jsx":"9dfe6dd267e4","components/core/Button.jsx":"39ae4060afaa","components/core/Card.jsx":"18c9733d70a2","components/core/CodeChip.jsx":"b3cac3a6cfb8","components/core/Eyebrow.jsx":"df157508f242","components/core/Icon.jsx":"e9214ca9a6eb","components/core/Input.jsx":"0ae93a8f4f5b","components/core/SectionHeading.jsx":"fd99279bfc4c","components/core/SkipLink.jsx":"ea592566d409","components/site/ChangelogEntry.jsx":"af69aa3e2364","components/site/DocsNav.jsx":"e0547a499308","components/site/FeatureCard.jsx":"59dcb87dbdf0","components/site/SiteFooter.jsx":"4987ab6e5e87","components/site/SiteHeader.jsx":"af423a357794","ui_kits/website/Changelog.jsx":"4405bdea17d2","ui_kits/website/Docs.jsx":"683c8d969bd5","ui_kits/website/Features.jsx":"b8ff71cdbf58","ui_kits/website/Home.jsx":"1509e0390daf","ui_kits/website/Legal.jsx":"63fd7d422973","ui_kits/website/Shell.jsx":"a53509848bfc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TermHutDesignSystem_6c66e0 = window.TermHutDesignSystem_6c66e0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Docs callout. The label is the tone's word, in mono. */
function Callout({
  tone = 'info',
  label,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'thut-callout thut-callout--' + tone
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "thut-callout__label"
  }, label || tone), /*#__PURE__*/React.createElement("p", {
    className: "thut-callout__body"
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Terminal / code sample on a crust ground. ANSI hues exactly as the terminal maps them. */
function CodeBlock({
  language = 'zsh',
  copyable = true,
  onCopy,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-code"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "thut-code__bar"
  }, /*#__PURE__*/React.createElement("span", null, language), copyable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "thut-code__copy",
    onClick: onCopy
  }, "copy") : null), /*#__PURE__*/React.createElement("pre", {
    className: "thut-code__body"
  }, children));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dashed border marks a state, not a card. Name the reason. */
function EmptyState({
  title,
  children,
  minHeight = 150,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-empty",
    style: {
      minHeight
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "thut-empty__title"
  }, title), children ? /*#__PURE__*/React.createElement("span", {
    className: "thut-empty__body"
  }, children) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Docs prose wrapper — 720px measure, 1.7 line-height, table and blockquote styling. */
function Prose({
  as = 'div',
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ('thut-prose ' + className).trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/content/ScreenshotFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Reproduces the app's own overlay titlebar so a screenshot reads as the Mac app it is. */
function ScreenshotFrame({
  title = 'term.hut',
  src,
  alt,
  height = 190,
  placeholder,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-frame"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "thut-frame__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thut-frame__dot",
    style: {
      background: 'var(--ctp-red)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "thut-frame__dot",
    style: {
      background: 'var(--ctp-yellow)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "thut-frame__dot",
    style: {
      background: 'var(--ctp-green)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "thut-frame__title"
  }, title)), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "thut-frame__body thut-frame__placeholder",
    style: {
      height
    }
  }, placeholder || 'app screenshot'));
}
Object.assign(__ds_scope, { ScreenshotFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ScreenshotFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono pill. Always factual: a version, a requirement, a capability. */
function Badge({
  tone = 'neutral',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'thut-badge' + (tone === 'neutral' ? '' : ' thut-badge--' + tone)
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Marketing / docs button. One filled button per view. */
function Button({
  variant = 'primary',
  size = 'lg',
  href,
  meta,
  disabled,
  children,
  ...rest
}) {
  const cls = ['thut-btn', 'thut-btn--' + variant, 'thut-btn--' + size].join(' ');
  const body = [children, meta ? /*#__PURE__*/React.createElement("span", {
    className: "thut-btn__meta",
    key: "m"
  }, meta) : null];
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), body);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface: base ground, hairline, 12px radius, 24px padding. */
function Card({
  variant = 'default',
  as = 'div',
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  const mod = variant === 'default' ? '' : ' thut-card--' + variant;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ('thut-card' + mod + ' ' + className).trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline code chip — the app's chat-panel treatment: peach on a warm dark wash. */
function CodeChip({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("code", _extends({
    className: "thut-chip"
  }, rest), children);
}
Object.assign(__ds_scope, { CodeChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono micro label. Not a heading — never counts in the outline. */
function Eyebrow({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-eyebrow"
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js';
let loaded = false;
function ensureIconify() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  if (document.querySelector('script[data-thut-iconify]')) return;
  const s = document.createElement('script');
  s.src = CDN;
  s.async = true;
  s.setAttribute('data-thut-iconify', '');
  document.head.appendChild(s);
}

/** Tabler outline icon, 24x24 grid, stroke 2, currentColor. The app's set, unchanged. */
function Icon({
  name,
  size = 20,
  label,
  style,
  ...rest
}) {
  ensureIconify();
  return React.createElement('iconify-icon', {
    icon: 'tabler:' + name,
    width: size,
    height: size,
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : 'true',
    style: {
      display: 'inline-flex',
      verticalAlign: 'middle',
      color: 'currentColor',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field. Crust fill so it reads as a well, not a card. */
function Input({
  invalid,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ('thut-input ' + className).trim(),
    "aria-invalid": invalid ? 'true' : undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered rule-under section heading. The number is peach, the note is optional. */
function SectionHeading({
  number,
  title,
  note,
  level = 2,
  ...rest
}) {
  const H = 'h' + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-sechead"
  }, rest), number ? /*#__PURE__*/React.createElement("span", {
    className: "thut-sechead__num"
  }, number) : null, /*#__PURE__*/React.createElement(H, {
    className: "thut-sechead__title"
  }, title), note ? /*#__PURE__*/React.createElement("span", {
    className: "thut-sechead__note"
  }, note) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SkipLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** First focusable element on every page. Visually hidden until focused. */
function SkipLink({
  href = '#main',
  children = 'Skip to content',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "thut-skiplink",
    href: href
  }, rest), children);
}
Object.assign(__ds_scope, { SkipLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SkipLink.jsx", error: String((e && e.message) || e) }); }

// components/site/ChangelogEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One release, read from the releases feed. Never hand-written. */
function ChangelogEntry({
  version,
  date,
  tone = 'ok',
  label = 'added',
  items = [],
  asset,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thut-card",
    style: {
      gap: 14
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "thut-release__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thut-release__version"
  }, version), /*#__PURE__*/React.createElement("span", {
    className: "thut-release__date"
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'thut-badge thut-badge--' + tone
  }, label))), items.length ? /*#__PURE__*/React.createElement("ul", {
    className: "thut-release__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it))) : children, asset ? /*#__PURE__*/React.createElement("div", {
    className: "thut-release__asset"
  }, asset) : null);
}
Object.assign(__ds_scope, { ChangelogEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ChangelogEntry.jsx", error: String((e && e.message) || e) }); }

// components/site/DocsNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Docs sidebar. Active row: raised ground plus a 2px mauve edge. */
function DocsNav({
  groups = [],
  current,
  onNavigate,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: "thut-docsnav",
    "aria-label": "Docs"
  }, rest), groups.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "thut-docsnav__group"
  }, g.title), g.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.slug,
    className: "thut-docsnav__item",
    href: '/docs/' + it.slug,
    "aria-current": current === it.slug ? 'page' : undefined,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(it.slug);
    } : undefined
  }, it.label)))));
}
Object.assign(__ds_scope, { DocsNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/DocsNav.jsx", error: String((e && e.message) || e) }); }

// components/site/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered mechanism card with the approved gradient hairline. */
function FeatureCard({
  number,
  title,
  children,
  href,
  more = 'how it works →',
  icon,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "thut-feature",
    href: href
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      display: 'flex'
    }
  }, icon) : null, number ? /*#__PURE__*/React.createElement("div", {
    className: "thut-feature__num"
  }, number) : null, /*#__PURE__*/React.createElement("h3", {
    className: "thut-feature__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "thut-feature__body"
  }, children), href ? /*#__PURE__*/React.createElement("span", {
    className: "thut-feature__more"
  }, more) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Crust footer: mark, bundle id, three link columns. */
function SiteFooter({
  columns = [],
  mark = 'assets/favicon.svg',
  org = 'HutsonLabs',
  bundleId = 'com.hutsonlabs.termhut',
  repoUrl,
  repoLabel = 'GitHub',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "thut-footer"
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mark,
    alt: "",
    width: 28,
    height: 28,
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "thut-footer__meta"
  }, org, /*#__PURE__*/React.createElement("br", null), bundleId), repoUrl ? /*#__PURE__*/React.createElement("a", {
    className: "thut-footer__repo",
    href: repoUrl
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "brand-github",
    size: 16
  }), repoLabel) : null), /*#__PURE__*/React.createElement("div", {
    className: "thut-footer__cols"
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "thut-footer__col",
    key: c.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "thut-footer__head"
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    className: "thut-footer__link",
    key: l.label,
    href: l.href || '#'
  }, l.label))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 60px site header on a crust ground. Deliberately not the app titlebar. */
function SiteHeader({
  current,
  items = [],
  action,
  onNavigate,
  mark = 'assets/favicon.svg',
  compact,
  onMenu,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "thut-header",
    style: compact ? {
      height: 'var(--header-h-mobile)',
      padding: '0 var(--page-pad-sm)'
    } : undefined
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "thut-header__mark",
    href: "/",
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate('/');
    } : undefined
  }, /*#__PURE__*/React.createElement("img", {
    src: mark,
    alt: "term.hut",
    width: compact ? 22 : 24,
    height: compact ? 22 : 24,
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "thut-header__name"
  }, "term.hut")), compact ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "thut-header__burger",
    "aria-label": "Menu",
    onClick: onMenu
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "thut-header__nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    className: "thut-header__link",
    href: it.href,
    "aria-current": current === it.href ? 'page' : undefined,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(it.href);
    } : undefined
  }, it.label))), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, action) : null));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Changelog.jsx
try { (() => {
const {
  ChangelogEntry,
  EmptyState,
  CodeChip,
  Badge,
  Eyebrow
} = window.TermHutDesignSystem_6c66e0;
function Changelog() {
  return /*#__PURE__*/React.createElement(Page, {
    gap: "var(--s-16)"
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)',
      paddingTop: 'var(--s-16)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--display-l)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-ls)',
      fontWeight: 600
    }
  }, "Changelog"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-lead)',
      lineHeight: 'var(--body-lead-lh)',
      color: 'var(--ink-muted)',
      maxWidth: 'var(--measure-lead)'
    }
  }, "Read from the releases feed. Nothing on this page is hand-written."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ok"
  }, "feed live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--micro)',
      color: 'var(--ink-dim)'
    }
  }, "github.com/HutsonLabs/term.hut-releases"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)',
      maxWidth: 'var(--prose-max)'
    }
  }, /*#__PURE__*/React.createElement(ChangelogEntry, {
    version: "0.9.4",
    date: "2026-08-02",
    label: "added",
    asset: "term.hut_0.9.4_aarch64.dmg \xB7 5.4 MB",
    items: [/*#__PURE__*/React.createElement("span", {
      key: "a"
    }, /*#__PURE__*/React.createElement(CodeChip, null, "/btw"), " asks a side question without costing the turn."), /*#__PURE__*/React.createElement("span", {
      key: "b"
    }, "Chat tabs rename through the CLI's own ", /*#__PURE__*/React.createElement(CodeChip, null, "/rename"), ", so the name survives a restart.")]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Earlier releases"), /*#__PURE__*/React.createElement(EmptyState, {
    title: "Nothing earlier is published."
  }, "0.9.4 is the first release in the assets-only repo. The feed fills this list the moment another dmg is published \u2014 no entry is written by hand."))));
}
Object.assign(window, {
  Changelog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Changelog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Docs.jsx
try { (() => {
const {
  DocsNav,
  Prose,
  CodeBlock,
  Callout,
  Input,
  CodeChip
} = window.TermHutDesignSystem_6c66e0;
const GROUPS = [{
  title: 'Concepts',
  items: [{
    slug: 'anchored-workspaces',
    label: 'Anchored workspaces'
  }, {
    slug: 'detached-agents',
    label: 'Detached agents'
  }, {
    slug: 'persistent-shells',
    label: 'Persistent shells'
  }, {
    slug: 'ssh-remotes',
    label: 'SSH remotes'
  }]
}, {
  title: 'Protocol',
  items: [{
    slug: 'event-stream',
    label: 'Event stream'
  }, {
    slug: 'slash-commands',
    label: 'Slash commands'
  }]
}];
const PAGES = {
  'detached-agents': {
    title: 'Detached agents',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "A session is not a child process. It runs behind a FIFO in ", /*#__PURE__*/React.createElement(CodeChip, null, "~/.term-hut/agents/<id>/"), " on whichever host owns it."),
    toc: ['Attach and detach', 'Event stream'],
    quote: 'The app is a viewer, not the owner.'
  },
  'anchored-workspaces': {
    title: 'Anchored workspaces',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "A project is a directory bound to its own session, terminal, editor and branch. Switch the anchor and all four follow."),
    toc: ['Adding an anchor', 'Worktrees'],
    quote: 'One anchor owns one repo, local or over SSH.'
  },
  'persistent-shells': {
    title: 'Persistent shells',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "Shells survive a window close: the pty stays alive on the host and its scrollback is replayed on reattach."),
    toc: ['Lifetime', 'Scrollback'],
    quote: 'A shell is state, not a view.'
  },
  'ssh-remotes': {
    title: 'SSH remotes',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "A remote project is not a lesser mode. term.hut uses your own SSH config; nothing is hosted."),
    toc: ['Config', 'Agent placement'],
    quote: 'Your keys, your hosts.'
  },
  'event-stream': {
    title: 'Event stream',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "Every pane reads one NDJSON stream per agent. Lines are append-only and replayable from byte zero."),
    toc: ['Line shape', 'Replay'],
    quote: 'Append-only, so replay is just reading.'
  },
  'slash-commands': {
    title: 'Slash commands',
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "Commands are forwarded to the Claude Code CLI verbatim, so anything the CLI accepts works here."),
    toc: ['Forwarding', 'Naming'],
    quote: 'No second command layer.'
  }
};
function Docs({
  slug = 'detached-agents',
  onSelect
}) {
  const page = PAGES[slug] || PAGES['detached-agents'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--docs-sidebar) minmax(0,1fr) var(--docs-toc)',
      gap: 'var(--gutter)',
      paddingTop: 'var(--s-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      position: 'sticky',
      top: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search the docs"
  }), /*#__PURE__*/React.createElement(DocsNav, {
    groups: GROUPS,
    current: slug,
    onNavigate: onSelect
  })), /*#__PURE__*/React.createElement(Prose, {
    as: "article",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--display-l)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-ls)',
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, page.title), /*#__PURE__*/React.createElement("p", null, page.lead), /*#__PURE__*/React.createElement("h4", {
    id: "s1"
  }, page.toc[0]), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("li", null, "Closing the window detaches. The stream keeps appending."), /*#__PURE__*/React.createElement("li", null, "Reopening re-attaches, replays, then follows.")), /*#__PURE__*/React.createElement("blockquote", null, page.quote), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "zsh"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "thut-code__prompt"
  }, "$"), " hut agents"), /*#__PURE__*/React.createElement("div", null, "a7f3 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ok)'
    }
  }, "attached"), " ~/src/term.hut ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "2h 14m")), /*#__PURE__*/React.createElement("div", null, "b1c9 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-dim)'
    }
  }, "detached"), " ~/src/api ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "17m"))), /*#__PURE__*/React.createElement("h4", {
    id: "s2"
  }, page.toc[1]), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "event"), /*#__PURE__*/React.createElement("th", null, "source"), /*#__PURE__*/React.createElement("th", null, "payload"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ink)'
    }
  }, "claude://message"), /*#__PURE__*/React.createElement("td", null, "claude.rs"), /*#__PURE__*/React.createElement("td", null, "NDJSON line")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ink)'
    }
  }, "pty://output"), /*#__PURE__*/React.createElement("td", null, "main.rs"), /*#__PURE__*/React.createElement("td", null, "raw bytes")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ink)'
    }
  }, "fs://changed"), /*#__PURE__*/React.createElement("td", null, "watcher.rs"), /*#__PURE__*/React.createElement("td", null, "path list")))), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    label: "note"
  }, "Auth is inherited from your own ", /*#__PURE__*/React.createElement(CodeChip, null, "claude"), " CLI credentials. term.hut contains no Anthropic auth code.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      position: 'sticky',
      top: 'var(--s-6)'
    },
    "aria-label": "On this page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thut-eyebrow"
  }, "On this page"), page.toc.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    className: "thut-link",
    style: {
      fontSize: 'var(--body-2xs)',
      borderBottom: 0,
      color: i === 0 ? 'var(--accent)' : 'var(--ink-muted)'
    },
    href: '#s' + (i + 1)
  }, t))));
}
Object.assign(window, {
  Docs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Docs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
const {
  SectionHeading,
  ScreenshotFrame,
  CodeBlock,
  Callout,
  Badge,
  Icon
} = window.TermHutDesignSystem_6c66e0;
const SECTIONS = [{
  n: '01',
  icon: 'sparkles',
  title: 'Detached agents',
  body: 'A session is not a child process. It runs behind a FIFO in ~/.term-hut/agents/<id>/ on whichever host owns it — the app is a viewer, not the owner. Closing the window detaches and the stream keeps appending; reopening replays it, then follows.',
  note: 'agent state outlives the window'
}, {
  n: '02',
  icon: 'folder-plus',
  title: 'Anchored workspaces',
  body: 'A project is a directory bound to its own session, terminal, editor and branch. Switching the anchor switches all four at once, so there is no state to reconcile by hand.',
  note: 'one anchor, four surfaces'
}, {
  n: '03',
  icon: 'list-tree',
  title: 'One surface',
  body: 'Terminal, file tree, LSP editor and agent chat are panes in a single window sharing one state tree. A file opened by the agent is the file the editor shows.',
  note: 'panes, not apps'
}];
function Features() {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)',
      paddingTop: 'var(--s-16)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--display-l)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-ls)',
      fontWeight: 600
    }
  }, "Features"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-lead)',
      lineHeight: 'var(--body-lead-lh)',
      color: 'var(--ink-muted)',
      maxWidth: 'var(--measure-lead)'
    }
  }, "One section per mechanism, and the reason it works that way.")), SECTIONS.map(s => /*#__PURE__*/React.createElement("section", {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    number: s.n,
    title: s.title,
    note: s.note
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body)',
      lineHeight: 'var(--body-lh)',
      color: 'var(--ink-muted)',
      maxWidth: 'var(--measure-body)'
    }
  }, s.body), s.n === '01' ? /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    label: "note"
  }, "Auth is inherited from your own ", /*#__PURE__*/React.createElement("span", {
    className: "thut-chip"
  }, "claude"), " CLI credentials. term.hut contains no Anthropic auth code.") : null, s.n === '02' ? /*#__PURE__*/React.createElement(CodeBlock, {
    language: "zsh"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "thut-code__prompt"
  }, "$"), " hut anchor add ~/src/api --branch main"), /*#__PURE__*/React.createElement("div", {
    className: "hl-cmt"
  }, "# binds session, terminal, editor and branch")) : null, s.n === '03' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "remote"
  }, "ssh"), /*#__PURE__*/React.createElement(Badge, null, "xterm.js"), /*#__PURE__*/React.createElement(Badge, null, "CodeMirror")) : null), /*#__PURE__*/React.createElement(ScreenshotFrame, {
    title: 'term.hut — ' + s.title.toLowerCase(),
    height: 220,
    placeholder: /*#__PURE__*/React.createElement("span", null, s.title.toLowerCase(), " screenshot", /*#__PURE__*/React.createElement("br", null), "none shipped yet")
  })))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  FeatureCard,
  ScreenshotFrame,
  CodeBlock,
  Eyebrow,
  SectionHeading
} = window.TermHutDesignSystem_6c66e0;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)',
      alignItems: 'flex-start',
      background: 'var(--grad-bloom)',
      margin: '0 calc(-1 * var(--page-pad))',
      padding: 'var(--rhythm-hero) var(--page-pad) var(--s-16)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/favicon.svg",
    alt: "term.hut",
    width: "56",
    height: "56",
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(40px,7vw,76px)',
      lineHeight: 1.15,
      letterSpacing: 'var(--display-xl-ls)',
      fontWeight: 600,
      maxWidth: '18ch'
    }
  }, "A local, agent-aware terminal."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-lead)',
      lineHeight: 'var(--body-lead-lh)',
      color: 'var(--ink-muted)',
      maxWidth: 'var(--measure-lead)'
    }
  }, "Terminal, file tree, LSP editor and Claude share state in one window. Sessions run behind a FIFO on the host that owns them, so closing the app detaches instead of killing them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--s-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "https://github.com/HutsonLabs/term.hut-releases/releases",
    meta: "5.4 MB \xB7 dmg"
  }, "Download for macOS"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/docs')
  }, "Read the docs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "v0.9.4"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ok"
  }, "signed & notarized"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warn"
  }, "macOS 12+"), /*#__PURE__*/React.createElement(Badge, {
    tone: "remote"
  }, "ssh"))), /*#__PURE__*/React.createElement(ScreenshotFrame, {
    title: "term.hut \u2014 ~/src/term.hut",
    height: 380,
    placeholder: /*#__PURE__*/React.createElement("span", null, "app screenshot", /*#__PURE__*/React.createElement("br", null), "1600\xD71000 \xB7 2x \xB7 real window, no mockup", /*#__PURE__*/React.createElement("br", null), "none shipped yet")
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    title: "Three mechanisms",
    note: "stated as mechanisms, not benefits"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    number: "01",
    title: "Detached agents",
    href: "/docs/detached-agents"
  }, "Claude sessions aren't child processes. Closing the app detaches; reopening re-attaches and replays the stream."), /*#__PURE__*/React.createElement(FeatureCard, {
    number: "02",
    title: "Anchored workspaces",
    href: "/docs/anchored-workspaces"
  }, "A directory binds its own session, terminal, editor and branch. Switch the anchor, switch all of it."), /*#__PURE__*/React.createElement(FeatureCard, {
    number: "03",
    title: "One surface",
    href: "/docs/panes"
  }, "Terminal, tree, LSP editor and agent chat share state in a single window instead of juggled apps."))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Attach from the shell"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "zsh"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "thut-code__prompt"
  }, "$"), " hut open ~/src/term.hut"), /*#__PURE__*/React.createElement("div", {
    className: "hl-cmt"
  }, "# anchors the repo, attaches its session"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ok)'
    }
  }, "\u2713"), " agent ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--remote)'
    }
  }, "a7f3"), " re-attached ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "(2h 14m, 1.4k lines)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What it declines to do"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 'var(--body-s)',
      lineHeight: 1.7,
      color: 'var(--ink-muted)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "No Anthropic auth code \u2014 it uses the credentials your ", /*#__PURE__*/React.createElement("span", {
    className: "thut-chip"
  }, "claude"), " CLI already holds."), /*#__PURE__*/React.createElement("li", null, "No Intel build, no Windows, no Linux. aarch64 only."), /*#__PURE__*/React.createElement("li", null, "No analytics, no cookies, no third-party scripts.")))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Legal.jsx
try { (() => {
const {
  Card,
  Eyebrow
} = window.TermHutDesignSystem_6c66e0;
function Legal() {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--gutter)',
      paddingTop: 'var(--s-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "well",
    style: {
      gap: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--title-m)',
      fontWeight: 600
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body)',
      lineHeight: 'var(--prose-lh)',
      color: 'var(--ink-muted)'
    }
  }, "This site collects nothing. No analytics, no cookies, no third-party scripts, no server logs kept beyond what the host needs to serve a file."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body)',
      lineHeight: 'var(--prose-lh)',
      color: 'var(--ink-muted)'
    }
  }, "The app is the same. term.hut talks to your machine, your hosts over your own SSH, and the Claude Code CLI you already installed \u2014 using your credentials, which it never sees. Nothing is sent to us, because there is no us to send it to."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-xs)',
      color: 'var(--ink-dim)'
    }
  }, "Downloads are served by GitHub Releases, which keeps its own logs.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, null, "License \xB7 placeholder, confirm before ship"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-xs)',
      lineHeight: 1.7,
      color: 'var(--ink-muted)'
    }
  }, "Proprietary, free to download, no source. The source repo is private and the releases repo is assets-only, so that is what is true today."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-xs)',
      lineHeight: 1.7,
      color: 'var(--ink-muted)'
    }
  }, "Vendored dependencies carry their own licenses: xterm.js, CodeMirror, Rough.js, perfect-freehand, Catppuccin icons, and Maple Mono under OFL."))));
}
Object.assign(window, {
  Legal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Legal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  SkipLink,
  Button
} = window.TermHutDesignSystem_6c66e0;
const NAV = [{
  href: '/features',
  label: 'Features'
}, {
  href: '/docs',
  label: 'Docs'
}, {
  href: '/changelog',
  label: 'Changelog'
}];
const FOOTER = [{
  title: 'Product',
  links: [{
    label: 'Features'
  }, {
    label: 'Download'
  }, {
    label: 'Changelog'
  }]
}, {
  title: 'Docs',
  links: [{
    label: 'Anchored workspaces'
  }, {
    label: 'Detached agents'
  }, {
    label: 'SSH'
  }]
}, {
  title: 'Legal',
  links: [{
    label: 'License'
  }, {
    label: 'Privacy'
  }]
}];
function Shell({
  route,
  go,
  children,
  ground
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: ground || 'var(--grad-ground)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SkipLink, null), /*#__PURE__*/React.createElement(SiteHeader, {
    current: route,
    items: NAV,
    mark: "../../assets/favicon.svg",
    onNavigate: go,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go('/')
    }, "download")
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad) var(--rhythm-section)',
      boxSizing: 'border-box'
    }
  }, children), /*#__PURE__*/React.createElement(SiteFooter, {
    mark: "../../assets/favicon.svg",
    columns: FOOTER,
    repoUrl: "https://github.com/HutsonLabs/term.hut-releases"
  }));
}
function Page({
  children,
  gap = 'var(--rhythm-section)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      paddingTop: 'var(--s-16)'
    }
  }, children);
}
Object.assign(window, {
  Shell,
  Page,
  NAV,
  FOOTER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.ScreenshotFrame = __ds_scope.ScreenshotFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeChip = __ds_scope.CodeChip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SkipLink = __ds_scope.SkipLink;

__ds_ns.ChangelogEntry = __ds_scope.ChangelogEntry;

__ds_ns.DocsNav = __ds_scope.DocsNav;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
