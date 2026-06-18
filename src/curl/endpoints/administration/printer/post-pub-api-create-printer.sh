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
  --url "${FAXCORE_BASE_URL}/api/printer" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data @- <<'JSON'
{
    "domain":  "sample-domain",
    "printer":  "sample-value",
    "description":  "sample-value",
    "visibility":  1,
    "setActive":  0,
    "serverName":  "Sample Name",
    "connectDomain":  "sample-domain",
    "connectUsername":  "sample.user",
    "connectPassword":  "change-me",
    "printerName":  "Sample Name",
    "paperSize":  0,
    "fontName":  0,
    "fontSize":  1,
    "fontWeight":  0,
    "allowBannerPage":  0,
    "hMargin":  1,
    "vMargin":  1,
    "bannerPage":  "sample-value"
}
JSON
