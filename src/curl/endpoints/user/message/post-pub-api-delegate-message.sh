#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"
if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "This sample changes or deletes data. Set FAXCORE_CONFIRM_DESTRUCTIVE=true to run it." >&2
  exit 1
fi
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/delegate" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data @- <<'JSON'
{
    "message":  {
                    "username":  "sample.user",
                    "recipients":  {
                                       "name":  "Sample Name",
                                       "address":  "+15551234567",
                                       "rawFax":  true,
                                       "notifyAddress":  "+15551234567",
                                       "company":  "sample-value"
                                   },
                    "senderName":  "Sample Name",
                    "senderCompName":  "Sample Name",
                    "subject":  "Sample subject",
                    "note":  "sample-value",
                    "billingCode":  "sample-value",
                    "scheduleDate":  "2026-01-01",
                    "priority":  1,
                    "isOnHold":  true,
                    "mss":  true,
                    "msf":  true,
                    "trackings":  {
                                      "label":  "sample-value",
                                      "value":  "sample-value"
                                  },
                    "documents":  {
                                      "name":  "Sample Name",
                                      "path":  "sample-value",
                                      "isMerge":  true
                                  },
                    "agents":  {
                                   "id":  "sample-value",
                                   "type":  "sample-value",
                                   "value":  "sample-value"
                               }
                }
}
JSON
