FROM node:8.5.0

ENV NPM_CONFIG_LOGLEVEL warn


COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

COPY . .

RUN npm run build --production

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000