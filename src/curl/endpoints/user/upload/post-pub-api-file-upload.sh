#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_UPLOAD_FILE:?Set FAXCORE_UPLOAD_FILE first for POST /api/upload.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../../common/oauth-token.sh"

ACCESS_TOKEN="$(get_faxcore_access_token)"
UPLOAD_FIELD="${FAXCORE_UPLOAD_FIELD:-}"
UPLOAD_CONTENT_TYPE="${FAXCORE_UPLOAD_CONTENT_TYPE:-}"

if [ -z "${UPLOAD_CONTENT_TYPE}" ]; then
  case "${FAXCORE_UPLOAD_FILE,,}" in
    *.pdf) UPLOAD_CONTENT_TYPE="application/pdf" ;;
    *.tif|*.tiff) UPLOAD_CONTENT_TYPE="image/tiff" ;;
    *.png) UPLOAD_CONTENT_TYPE="image/png" ;;
    *.jpg|*.jpeg) UPLOAD_CONTENT_TYPE="image/jpeg" ;;
    *.txt) UPLOAD_CONTENT_TYPE="text/plain" ;;
    *.doc) UPLOAD_CONTENT_TYPE="application/msword" ;;
    *.docx) UPLOAD_CONTENT_TYPE="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ;;
  esac
fi

UPLOAD_FORM="${UPLOAD_FIELD}=@${FAXCORE_UPLOAD_FILE}"
if [ -n "${UPLOAD_CONTENT_TYPE}" ]; then
  UPLOAD_FORM="${UPLOAD_FORM};type=${UPLOAD_CONTENT_TYPE}"
fi

RESPONSE="$(
  curl --fail-with-body --silent --show-error \
    --request POST \
    --url "${FAXCORE_BASE_URL}/api/upload" \
    --header "Authorization: Bearer ${ACCESS_TOKEN}" \
    --header "Accept: application/json" \
    --form "${UPLOAD_FORM}"
)"

if printf '%s' "${RESPONSE}" | grep -qi '"status"[[:space:]]*:[[:space:]]*"Error"'; then
  echo "${RESPONSE}" >&2
  exit 1
fi

printf '%s\n' "${RESPONSE}"
