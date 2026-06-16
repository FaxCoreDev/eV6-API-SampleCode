#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://123.faxcoreasia.com}"
: "${FAXCORE_UPLOADED_FILE_NAME:?Upload a file first and set FAXCORE_UPLOADED_FILE_NAME.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/send" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "message": {
      "recipients": [
        {
          "name": "'"${FAXCORE_RECIPIENT_NAME:-Sample Recipient}"'",
          "address": "'"${FAXCORE_RECIPIENT_FAX:-+15551234567}"'",
          "rawFax": true
        }
      ],
      "senderName": "'"${FAXCORE_SENDER_NAME:-FaxCore API Sample}"'",
      "subject": "'"${FAXCORE_SUBJECT:-FaxCore API sample fax}"'",
      "note": "'"${FAXCORE_NOTE:-Sent from the curl sample.}"'",
      "priority": 0,
      "isOnHold": false,
      "documents": [
        {
          "name": "'"${FAXCORE_DOCUMENT_NAME:-sample.pdf}"'",
          "path": "'"${FAXCORE_UPLOADED_FILE_NAME}"'",
          "isMerge": false
        }
      ]
    }
  }'
