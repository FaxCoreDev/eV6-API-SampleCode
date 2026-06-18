#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"

ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request GET \
  --url "${FAXCORE_BASE_URL}/api/message/image?model.messageID=sample-message-id&model.xsactSeq=1&model.page=1&model.width=1" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json"
