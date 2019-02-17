# brew install mp4v2
mp4file --dump $1 | grep -A4 'type avcC' | tail -n3
