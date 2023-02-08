FROM node:14.20.0-alpine

RUN mkdir app/

WORKDIR /app/

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

ENTRYPOINT [ "node" ]
CMD [ "app.js" ]