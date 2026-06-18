#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"

ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/user/search" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data @- <<'JSON'
{
    "userName":  "sample.user",
    "displayName":  "Sample Name",
    "active":  "sample-value",
    "firstName":  "Sample Name",
    "lastName":  "Sample Name",
    "preferredAddress":  "+15551234567",
    "allDomain":  "sample-domain",
    "pagination":  {
                       "maxResult":  1,
                       "page":  1
                   }
}
JSON
