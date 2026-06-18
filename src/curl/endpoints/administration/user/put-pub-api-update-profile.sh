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
  --request PUT \
  --url "${FAXCORE_BASE_URL}/api/update/profile" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data @- <<'JSON'
{
    "id":  "sample-value",
    "profile":  {
                    "role":  "sample-value",
                    "isExternalAuth":  true,
                    "isActive":  true,
                    "displayName":  "Sample Name",
                    "firstName":  "Sample Name",
                    "lastName":  "Sample Name",
                    "companyName":  "Sample Name",
                    "preferAddressType":  "+15551234567",
                    "desc":  "sample-value",
                    "csid":  "sample-value",
                    "callerID":  "sample-value",
                    "email":  "user@example.com",
                    "addresses":  {
                                      "addressID":  1,
                                      "addressType":  "+15551234567",
                                      "address":  "+15551234567",
                                      "isPrimary":  true,
                                      "nor":  true,
                                      "nos":  true
                                  }
                }
}
JSON
