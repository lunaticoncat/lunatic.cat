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

checkinstall zopfli
checkinstall brotli

compress "*.js"
compress "*.css"
compress "*.svg"
compress "*.ttf"

