###################
# BUILD FOR LOCAL DEVELOPMENT
# this step installs all the dependencies needed for the client app
###################

FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

USER node

###################
# BUILD FOR PRODUCTION
# this step builds the app using the previous installed dependencies
###################

FROM node:16-alpinee AS build

WORKDIR /usr/src/app

COPY package*.json ./

COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build

###################
# PRODUCTION
# this step runs the app using the previous build
###################

FROM node:16-alpine AS production

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=build /usr/src/app/build ./build

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

CMD [ "npm", "start" ]
