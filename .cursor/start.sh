#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PORT=4173
if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
  exit 0
fi

exec npx serve public -l "${PORT}"