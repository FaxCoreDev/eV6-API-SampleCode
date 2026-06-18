#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_PARENT_DOMAIN_ID:?Set FAXCORE_PARENT_DOMAIN_ID first.}"
: "${FAXCORE_DOMAIN_NAME:?Set FAXCORE_DOMAIN_NAME first.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"
DOMAIN_ACTIVE="${FAXCORE_DOMAIN_ACTIVE:-true}"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/domain" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "parentDomainID": '"${FAXCORE_PARENT_DOMAIN_ID}"',
    "domainName": "'"${FAXCORE_DOMAIN_NAME}"'",
    "description": "'"${FAXCORE_DOMAIN_DESCRIPTION:-}"'",
    "isActive": '"${DOMAIN_ACTIVE}"'
  }'

