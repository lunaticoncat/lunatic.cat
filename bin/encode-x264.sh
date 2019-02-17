set -euox pipefail

ffmpeg -i $1 -c:v libx264 -profile:v baseline -level 3.0 -movflags +faststart -vf scale=$3 -an $2
