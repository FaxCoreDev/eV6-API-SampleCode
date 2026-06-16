#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://123.faxcoreasia.com}"
: "${FAXCORE_UPLOAD_FILE:?Set FAXCORE_UPLOAD_FILE first.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"
UPLOAD_FIELD="${FAXCORE_UPLOAD_FIELD:-file}"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/upload" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --form "${UPLOAD_FIELD}=@${FAXCORE_UPLOAD_FILE}"

