#!/usr/bin/env bash
set -euo pipefail

repo="$(cd "$(dirname "$0")/.." && pwd)"

link() {
  local source="$1" target="$2"

  if [[ -e "$target" && ! -L "$target" ]]; then
    echo "Stopped: $target exists and isn't a link. Move it away, then run this again." >&2
    exit 1
  fi

  mkdir -p "$(dirname "$target")"
  ln -sfn "$source" "$target"
  echo "Linked $target"
}

for skill in "$repo"/skills/*/; do
  link "${skill%/}" "$HOME/.claude/skills/$(basename "$skill")"
done

claude_rules="$HOME/.claude/CLAUDE.md"
import="@${repo/#$HOME/~}/global.md"
if ! grep -qxF "$import" "$claude_rules" 2>/dev/null; then
  {
    echo "$import"
    if [[ -s "$claude_rules" ]]; then
      echo
      cat "$claude_rules"
    fi
  } >"$claude_rules.tmp"
  mv "$claude_rules.tmp" "$claude_rules"
  echo "Added the import to $claude_rules"
fi
