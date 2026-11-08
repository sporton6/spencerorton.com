#!/bin/sh
# Rebuild files/spencer-orton-resume.pdf and images/resume-preview.webp from tools/resume.html.
# Needs Google Chrome, macOS sips and cwebp (brew install webp). Run from the repo root.
set -e
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
  --print-to-pdf=files/spencer-orton-resume.pdf "file://$(pwd)/tools/resume.html" 2>/dev/null
# Preview = page 1 of the PDF, 850 px wide
sips -s format png --resampleWidth 850 files/spencer-orton-resume.pdf --out "$TMP/preview.png" >/dev/null
cwebp -quiet -q 85 "$TMP/preview.png" -o images/resume-preview.webp
rm -rf "$TMP"
echo "built files/spencer-orton-resume.pdf and images/resume-preview.webp"
