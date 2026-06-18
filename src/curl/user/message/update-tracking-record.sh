#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_MESSAGE_ID:?Set FAXCORE_MESSAGE_ID first.}"
: "${FAXCORE_TRACK_ID:?Set FAXCORE_TRACK_ID first.}"
: "${FAXCORE_TRACK_VALUE:?Set FAXCORE_TRACK_VALUE first.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request PUT \
  --url "${FAXCORE_BASE_URL}/api/message/tracking" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "messageID": "'"${FAXCORE_MESSAGE_ID}"'",
    "trackID": '"${FAXCORE_TRACK_ID}"',
    "trackValue": "'"${FAXCORE_TRACK_VALUE}"'"
  }'

