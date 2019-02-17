# $1 - video file
# $2 - skip seconds
ffmpeg -ss $2 -i $1 -vframes 1 -y $1.png
