#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_MESSAGE_ID:?Set FAXCORE_MESSAGE_ID first.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request GET \
  --url "${FAXCORE_BASE_URL}/api/message/image?model.messageID=${FAXCORE_MESSAGE_ID}&model.xsactSeq=${FAXCORE_XSACT_SEQ:-1}&model.page=${FAXCORE_IMAGE_PAGE:-1}&model.width=${FAXCORE_IMAGE_WIDTH:-800}" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json"
