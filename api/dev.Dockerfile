ARG NODE_IMAGE=node:20-alpine

FROM $NODE_IMAGE

WORKDIR /app

COPY app/package.json app/yarn.lock ./
RUN yarn install

COPY app .

CMD ["yarn", "run", "start:dev"]
EXPOSE 80
