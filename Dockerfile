# Node.js 애플리케이션을 위한 베이스 이미지를 선택합니다.
FROM node:18

# 애플리케이션의 루트 디렉토리를 설정합니다.
WORKDIR /usr/src/app

# package.json 파일과 yarn.lock 파일을 복사합니다.
COPY package.json yarn.lock ./

# 의존성을 설치합니다.
RUN yarn install 

# pm2를 설치합니다.
RUN yarn global add pm2

# 애플리케이션의 소스 코드를 복사합니다.
COPY . .

# TypeScript를 JavaScript로 컴파일합니다.
RUN yarn run build

# 컨테이너가 시작될 때 실행할 명령을 설정합니다.
CMD ["pm2-runtime", "start", "dist/apps/nestjs-back/main.js"]

