#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_PROFILE_USER_ID:?Set FAXCORE_PROFILE_USER_ID first.}"

if [ "${FAXCORE_CONFIRM_DESTRUCTIVE:-}" != "true" ]; then
  echo "Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a user profile." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"

curl --fail-with-body --silent --show-error \
  --request PUT \
  --url "${FAXCORE_BASE_URL}/api/update/profile" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "id": "'"${FAXCORE_PROFILE_USER_ID}"'",
    "profile": {
      "role": "'"${FAXCORE_PROFILE_ROLE:-User}"'",
      "isExternalAuth": '"${FAXCORE_PROFILE_EXTERNAL_AUTH:-false}"',
      "isActive": '"${FAXCORE_PROFILE_ACTIVE:-true}"',
      "displayName": "'"${FAXCORE_PROFILE_DISPLAY_NAME:-Sample User}"'",
      "firstName": "'"${FAXCORE_PROFILE_FIRST_NAME:-Sample}"'",
      "lastName": "'"${FAXCORE_PROFILE_LAST_NAME:-User}"'",
      "companyName": "'"${FAXCORE_PROFILE_COMPANY:-Example Company}"'",
      "preferAddressType": "'"${FAXCORE_PROFILE_PREFER_ADDRESS_TYPE:-Fax}"'",
      "desc": "'"${FAXCORE_PROFILE_DESCRIPTION:-Updated from curl sample}"'",
      "csid": "'"${FAXCORE_PROFILE_CSID:-}"'",
      "callerID": "'"${FAXCORE_PROFILE_CALLER_ID:-}"'",
      "email": "'"${FAXCORE_PROFILE_EMAIL:-user@example.com}"'",
      "addresses": []
    }
  }'
