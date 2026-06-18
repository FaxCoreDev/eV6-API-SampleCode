#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_MESSAGE_ID:?Set FAXCORE_MESSAGE_ID first.}"
: "${FAXCORE_TARGET_USERNAMES:?Set FAXCORE_TARGET_USERNAMES first.}"

if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "Set FAXCORE_CONFIRM_DESTRUCTIVE=true to forward a message." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"
USERNAMES_JSON="$(printf '%s' "${FAXCORE_TARGET_USERNAMES}" | awk -F',' '{ printf "["; for (i=1;i<=NF;i++) { gsub(/^ +| +$/, "", $i); printf "%s\"%s\"", (i>1?",":""), $i } printf "]" }')"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/forward" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "messageID": "'"${FAXCORE_MESSAGE_ID}"'",
    "usernames": '"${USERNAMES_JSON}"'
  }'
