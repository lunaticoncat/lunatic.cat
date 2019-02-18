#!/bin/bash
set -euxo pipefail

checkinstall() {
    if test ! $(which $1); then
        if test ! $(which brew); then
            echo "$1 not installed"
            exit 1
        fi
        brew install $1
    fi
}

compress() {
  find build -type f -iname "$1" -exec zopfli -i1000 {} \;
  find build -type f -iname "$1" -exec brotli -9 -k -f {} \;
}

# run on input before webpack
# checkinstall jpeg-archive
# checkinstall mozjpeg
# find build -type f -iname ".jpg" -exec jpeg-recompress {} {} \;

# checkinstall optipng
# find build -type f -name '*.png' -exec optipng {} \;

checkinstall cwebp
find build -type f -name '*.jpg' -exec cwebp -q 70 {} -o {}.webp \;
find build -type f -name '*.png' -exec cwebp -q 70 {} -o {}.webp \;

checkinstall zopfli
checkinstall brotli

compress "*.js"
compress "*.css"
compress "*.svg"
compress "*.ttf"
compress "*.webp"

