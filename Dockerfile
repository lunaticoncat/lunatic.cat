FROM node:12 AS builder

RUN mkdir /app && cd /app
WORKDIR /app

# Add user so we don't need --no-sandbox for chrome in react-snap
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# compress
RUN apt update && apt install -y --no-install-recommends zopfli brotli && rm -rf /var/lib/apt/lists/*

# react-snap needs chrome
# https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

USER pptruser

RUN (cd /app && git clone https://github.com/lunatic-cat/create-react-app.git)

# build tools
COPY --chown=pptruser package.json /app
COPY --chown=pptruser yarn.lock /app
RUN yarn install && yarn cache clean

# avoid copy of nginx (cannot ignore since add to nginx)
COPY --chown=pptruser src /app/src
COPY --chown=pptruser public /app/public

RUN yarn build
RUN ./node_modules/.bin/react-snap

# compress
RUN find build -regextype posix-egrep -regex '.*(\.jpg|\.png)' -exec ./node_modules/cwebp-bin/vendor/cwebp -quiet -q 70 {} -o {}.webp \;
RUN find build -regextype posix-egrep -regex '.*(\.js|\.css|\.svg|\.ttf|\.webp|\.jpg|\.png|\.html)' -exec zopfli -i1000 {} \;
RUN find build -regextype posix-egrep -regex '.*(\.js|\.css|\.svg|\.ttf|\.webp|\.jpg|\.png|\.html)' -exec brotli --input {} --output {}.br \;
RUN find build -regextype posix-egrep -regex '.*(\.br|\.webp)' -exec chown pptruser:pptruser {} \;

FROM fholzer/nginx-brotli:v1.16.0

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
