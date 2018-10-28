FROM node:8.12.0-jessie
LABEL version="0.0.1"

WORKDIR /app
COPY ./package.json /app
COPY ./package-lock.json /app

EXPOSE 3000
RUN npm install

COPY . /app

CMD ["npm","start"]
