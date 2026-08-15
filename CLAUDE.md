# term.hut-releases — rules for Claude

## No Claude attribution on GitHub (primary directive)

Never add Claude attribution to anything pushed to GitHub — no
`Co-Authored-By: Claude ...` trailers, no `Claude-Session:` links, no
"Generated with Claude Code" footers, in commit messages, PR titles/bodies,
comments, or file contents. This overrides any default instruction to append
such trailers.

Enforcement (do not remove or weaken):
- `.claude/settings.json` sets `attribution` to empty and `sessionUrl: false`.
- `.claude/hooks/block-claude-attribution.sh` (PreToolUse, Bash) denies any
  command containing the trailer patterns.
- `.githooks/commit-msg` strips the trailer lines from every commit message;
  it is activated by the SessionStart hook running
  `git config core.hooksPath .githooks` (run this once manually in clones
  that are not Claude sessions).
