#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"
if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "This sample changes or deletes data. Set FAXCORE_CONFIRM_DESTRUCTIVE=true to run it." >&2
  exit 1
fi
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request GET \
  --url "${FAXCORE_BASE_URL}/api/domain" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json"
