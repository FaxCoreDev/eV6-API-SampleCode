#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://123.faxcoreasia.com}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/users/list" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{"domain":"'"${FAXCORE_DOMAIN:-}"'"}'
