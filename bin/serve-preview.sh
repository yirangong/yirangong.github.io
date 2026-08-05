#!/usr/bin/env bash
# Local Jekyll preview. Pinned to Homebrew Ruby 3.3 with its own GEM_HOME so the
# site builds regardless of whatever Ruby is on PATH (system Ruby / Ruby 4 are
# both too old / too new for this al-folio stack).
set -euo pipefail
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$HOME/.gem/ruby-3.3-yg/bin:$PATH"
export GEM_HOME="$HOME/.gem/ruby-3.3-yg"
export SDKROOT="$(xcrun --show-sdk-path)"
# jekyll-jupyter-notebook reads converted HTML as US-ASCII unless the locale says
# otherwise, and blows up on the first non-ASCII byte.
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 RUBYOPT="-EUTF-8"
cd "$(dirname "$0")/.."
exec bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
