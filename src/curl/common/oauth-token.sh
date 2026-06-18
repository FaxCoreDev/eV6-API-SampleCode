#!/usr/bin/env bash

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"

get_faxcore_access_token() {
  if [ -n "${FAXCORE_ACCESS_TOKEN:-}" ]; then
    printf '%s' "${FAXCORE_ACCESS_TOKEN}"
    return
  fi

  : "${FAXCORE_CLIENT_ID:?Set FAXCORE_CLIENT_ID first.}"
  : "${FAXCORE_CLIENT_SECRET:?Set FAXCORE_CLIENT_SECRET first.}"

  local token_response
  token_response="$(
    curl --fail-with-body --silent --show-error \
      --request POST \
      --url "${FAXCORE_BASE_URL}/oauth/token" \
      --header "Content-Type: application/x-www-form-urlencoded" \
      --data-urlencode "client_id=${FAXCORE_CLIENT_ID}" \
      --data-urlencode "client_secret=${FAXCORE_CLIENT_SECRET}" \
      --data-urlencode "grant_type=client_credentials"
  )"

  printf '%s' "${token_response}" | sed -n 's/.*"access_token"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p'
}
