#!/bin/sh
# Régénère l'image de partage, la favicon et les icônes depuis brand/og.html, src/app/icon.svg et brand/icon-square.svg
set -e
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)
shot() {
  "$CHROME" --headless --hide-scrollbars --default-background-color=00000000 --user-data-dir="$TMP/profile" \
    --virtual-time-budget=3000 --window-size="$1" --screenshot="$2" "file://$PWD/$3" 2>/dev/null
}
shot 1200,630 "$TMP/og.png" brand/og.html
magick "$TMP/og.png" -strip -quality 86 src/app/opengraph-image.jpg
shot 512,512 "$TMP/round.png" src/app/icon.svg
magick "$TMP/round.png" -define icon:auto-resize=48,32,16 src/app/favicon.ico
# Fond plein : iOS et Android appliquent leur propre masque arrondi
shot 512,512 "$TMP/square.png" brand/icon-square.svg
magick "$TMP/square.png" -resize 180x180 -strip src/app/apple-icon.png
for s in 192 384 512; do magick "$TMP/square.png" -resize "${s}x${s}" -strip "public/icons/icon-${s}x${s}.png"; done
