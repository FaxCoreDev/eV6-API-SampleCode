#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"

ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/search" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data @- <<'JSON'
{
    "userName":  "sample.user",
    "fromDate":  "2026-01-01",
    "toDate":  "2026-01-01",
    "msgNo":  "sample-value",
    "msgId":  "sample-message-id",
    "trackValue":  "sample-value",
    "recpName":  "Sample Name",
    "faxAddr":  "+15551234567",
    "email":  "user@example.com",
    "localCSID":  "sample-value",
    "subject":  "Sample subject",
    "msgType":  0,
    "isFailed":  0,
    "isHeld":  0,
    "routingInfo":  "sample-value",
    "isPrinted":  0,
    "isSave":  0,
    "status":  0,
    "includeSubDomain":  0,
    "pagination":  {
                       "maxResult":  1,
                       "page":  1
                   }
}
JSON
