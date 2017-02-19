FROM nodesource/jessie:argon

LABEL name="dat-docker-example"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
EXPOSE 3282
