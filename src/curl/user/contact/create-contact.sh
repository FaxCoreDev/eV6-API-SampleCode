#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "Set FAXCORE_CONFIRM_DESTRUCTIVE=true to create a contact." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/contact" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "addressBookID": '"${FAXCORE_ADDRESS_BOOK_ID:-0}"',
    "displayName": "'"${FAXCORE_CONTACT_DISPLAY_NAME:-Sample Contact}"'",
    "firstName": "'"${FAXCORE_CONTACT_FIRST_NAME:-Sample}"'",
    "lastName": "'"${FAXCORE_CONTACT_LAST_NAME:-Contact}"'",
    "compName": "'"${FAXCORE_CONTACT_COMPANY:-Example Company}"'",
    "preferAddressType": "'"${FAXCORE_CONTACT_PREFER_ADDRESS_TYPE:-Fax}"'",
    "visibility": "'"${FAXCORE_CONTACT_VISIBILITY:-Private}"'",
    "description": "'"${FAXCORE_CONTACT_DESCRIPTION:-Created from curl sample}"'",
    "notifyOnFailed": '"${FAXCORE_CONTACT_NOTIFY_ON_FAILED:-true}"',
    "notifyOnSuccess": '"${FAXCORE_CONTACT_NOTIFY_ON_SUCCESS:-true}"',
    "addressList": [
      {
        "addrType": "'"${FAXCORE_CONTACT_ADDRESS_TYPE:-Fax}"'",
        "address": "'"${FAXCORE_CONTACT_ADDRESS:-+15551234567}"'"
      }
    ]
  }'
