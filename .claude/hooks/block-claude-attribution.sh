#!/usr/bin/env bash
# PreToolUse gate for the Bash tool: deny any command that would introduce
# Claude attribution trailers into git history or GitHub content.
# Blocked patterns: "Co-Authored-By: ... Claude ..." and "Claude-Session:".
set -u

input=$(cat)
cmd=$(printf '%s' "$input" | jq -r '.tool_input.command // empty' 2>/dev/null) || cmd=""

if printf '%s' "$cmd" | grep -qiE 'co-authored-by:[^"]*claude|claude-session:'; then
  cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"BLOCKED: Claude attribution trailers (Co-Authored-By: Claude / Claude-Session:) are forbidden in this repository. Re-run the command with those lines removed."}}
JSON
fi
exit 0
