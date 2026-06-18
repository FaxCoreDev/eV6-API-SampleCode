#!/usr/bin/env bash
set -euo pipefail

: "${FAXCORE_BASE_URL:=https://your-faxcore-server.example.com}"
: "${FAXCORE_UPLOAD_FILE:?Set FAXCORE_UPLOAD_FILE first. The send sample uploads this file first, then sends it as a message document.}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/../../common/oauth-token.sh"
ACCESS_TOKEN="$(get_faxcore_access_token)"
UPLOAD_FIELD="${FAXCORE_UPLOAD_FIELD:-}"
UPLOAD_CONTENT_TYPE="${FAXCORE_UPLOAD_CONTENT_TYPE:-}"
SCHEDULE_DATE="${FAXCORE_SCHEDULE_DATE:-$(date +%Y-%m-%d)}"

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

UPLOAD_RESPONSE="$(
  curl --fail-with-body --silent --show-error \
    --request POST \
    --url "${FAXCORE_BASE_URL}/api/upload" \
    --header "Authorization: Bearer ${ACCESS_TOKEN}" \
    --header "Accept: application/json" \
    --form "${UPLOAD_FORM}"
)"

if printf '%s' "${UPLOAD_RESPONSE}" | grep -qi '"status"[[:space:]]*:[[:space:]]*"Error"'; then
  echo "Upload failed." >&2
  echo "${UPLOAD_RESPONSE}" >&2
  exit 1
fi

UPLOADED_ID="$(
  printf '%s' "${UPLOAD_RESPONSE}" |
    sed -n 's/.*"id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' |
    head -n 1
)"

UPLOADED_FILE_NAME="$(
  printf '%s' "${UPLOAD_RESPONSE}" |
    sed -n 's/.*"fileName"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' |
    head -n 1
)"

if [ -z "${UPLOADED_ID}" ] || [ -z "${UPLOADED_FILE_NAME}" ]; then
  echo "Upload response did not include data[0].id and data[0].fileName." >&2
  echo "${UPLOAD_RESPONSE}" >&2
  exit 1
fi

DOCUMENTS_JSON='[
        {
          "name": "'"${UPLOADED_ID}"'",
          "path": "'"${UPLOADED_FILE_NAME}"'",
          "isMerge": false
        }
      ]'

if [ -n "${FAXCORE_COVER_PAGE_NAME:-}" ]; then
  DOCUMENTS_JSON='[
        {
          "name": "'"${FAXCORE_COVER_PAGE_NAME}"'",
          "path": "",
          "isMerge": true
        },
        {
          "name": "'"${UPLOADED_ID}"'",
          "path": "'"${UPLOADED_FILE_NAME}"'",
          "isMerge": false
        }
      ]'
fi

AGENTS_JSON='[]'
if [ -n "${FAXCORE_AGENT_ID:-}" ] && [ -n "${FAXCORE_AGENT_TYPE:-}" ] && [ -n "${FAXCORE_AGENT_VALUE:-}" ]; then
  AGENTS_JSON='[
        {
          "id": "'"${FAXCORE_AGENT_ID}"'",
          "type": "'"${FAXCORE_AGENT_TYPE}"'",
          "value": "'"${FAXCORE_AGENT_VALUE}"'"
        }
      ]'
fi

curl --fail-with-body --silent --show-error \
  --request POST \
  --url "${FAXCORE_BASE_URL}/api/message/send" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "message": {
      "recipients": [
        {
          "name": "'"${FAXCORE_RECIPIENT_NAME:-Sample Recipient}"'",
          "address": "'"${FAXCORE_RECIPIENT_FAX:-+15551234567}"'",
          "rawFax": true,
          "notifyAddress": "'"${FAXCORE_NOTIFY_ADDRESS:-${FAXCORE_RECIPIENT_FAX:-+15551234567}}"'",
          "company": "'"${FAXCORE_RECIPIENT_COMPANY:-Example Company}"'"
        }
      ],
      "senderName": "'"${FAXCORE_SENDER_NAME:-FaxCore API Sample}"'",
      "senderCompName": "'"${FAXCORE_SENDER_COMPANY:-Example Company}"'",
      "subject": "'"${FAXCORE_SUBJECT:-FaxCore API sample fax}"'",
      "note": "'"${FAXCORE_NOTE:-Sent from the curl sample.}"'",
      "billingCode": "'"${FAXCORE_BILLING_CODE:-Sample}"'",
      "scheduleDate": "'"${SCHEDULE_DATE}"'",
      "priority": '"${FAXCORE_PRIORITY:-60}"',
      "isOnHold": false,
      "mss": false,
      "msf": false,
      "trackings": [
        {
          "label": "Sample",
          "value": "curl"
        }
      ],
      "documents": '"${DOCUMENTS_JSON}"',
      "agents": '"${AGENTS_JSON}"'
    }
  }'
