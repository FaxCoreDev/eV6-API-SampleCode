#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_MESSAGE_ID:?Set FAXCORE_MESSAGE_ID first.}"
: "${FAXCORE_MESSAGE_SUBJECT:?Set FAXCORE_MESSAGE_SUBJECT first.}"

if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a message subject." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request PUT \
  --url "${FAXCORE_BASE_URL}/api/message/subject" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "messageId": "'"${FAXCORE_MESSAGE_ID}"'",
    "value": "'"${FAXCORE_MESSAGE_SUBJECT}"'"
  }'
