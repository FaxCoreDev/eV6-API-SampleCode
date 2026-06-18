#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/contact/list" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "addressBookID": '"${FAXCORE_ADDRESS_BOOK_ID:-0}"',
    "isContactGroup": false,
    "addressType": ["Fax", "Email"],
    "pagination": {
      "search": "'"${FAXCORE_CONTACT_SEARCH:-}"'",
      "page": '"${FAXCORE_PAGE:-1}"',
      "maxResult": '"${FAXCORE_MAX_RESULT:-25}"'
    }
  }'
