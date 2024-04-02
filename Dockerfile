# 빌드 스테이지
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install 
RUN yarn cache clean
COPY . .
RUN yarn run build

# 실행 스테이지
FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./
RUN yarn install --production

CMD ["yarn", "start"]