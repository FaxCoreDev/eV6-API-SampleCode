#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_CLIENT_ID:?Set FAXCORE_CLIENT_ID first.}"
: "${FAXCORE_CLIENT_SECRET:?Set FAXCORE_CLIENT_SECRET first.}"

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/oauth/token" \
  --header "Accept: application/json" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "client_id=${FAXCORE_CLIENT_ID}" \
  --data-urlencode "client_secret=${FAXCORE_CLIENT_SECRET}" \
  --data-urlencode "grant_type=client_credentials"

