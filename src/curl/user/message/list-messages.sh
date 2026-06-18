#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/list" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "folderName": "'"${FAXCORE_FOLDER:-inbox}"'",
    "startDate": "'"${FAXCORE_START_DATE:-20000101}"'",
    "endDate": "'"${FAXCORE_END_DATE:-20991231}"'",
    "isRead": "'"${FAXCORE_IS_READ:-all}"'",
    "isDownloaded": "'"${FAXCORE_IS_DOWNLOADED:-all}"'",
    "sortDescending": true,
    "pagination": {
      "page": '"${FAXCORE_PAGE:-1}"',
      "maxResult": '"${FAXCORE_MAX_RESULT:-25}"'
    }
  }'
