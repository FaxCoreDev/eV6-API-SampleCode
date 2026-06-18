#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_MESSAGE_ID:?Set FAXCORE_MESSAGE_ID first.}"

if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete messages." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"
MESSAGE_IDS_JSON="$(printf '%s' "${FAXCORE_MESSAGE_ID}" | awk -F',' '{ printf "["; for (i=1;i<=NF;i++) { gsub(/^ +| +$/, "", $i); printf "%s\"%s\"", (i>1?",":""), $i } printf "]" }')"

curl --fail-with-body --silent --show-error \
  --request DELETE \
  --url "${FAXCORE_BASE_URL}/api/message/delete" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{"messageID":'"${MESSAGE_IDS_JSON}"'}'

