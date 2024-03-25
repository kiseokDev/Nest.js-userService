# Node.js v14를 기반으로 하는 베이스 이미지를 설정합니다.
FROM node:14

# 앱 디렉터리를 생성합니다.
WORKDIR /usr/src/app

# 앱 의존성을 설치하기 위한 package.json과 package-lock.json 파일을 복사합니다.
COPY package*.json ./

# 앱 의존성을 설치합니다.
RUN npm install

# TypeScript를 JavaScript로 컴파일합니다.
RUN npm run build

# 앱 소스를 Docker 이미지 내부로 복사합니다.
COPY . .

# 앱이 8080 포트에서 실행될 것임을 Docker에 알립니다.
EXPOSE 8080

# 앱을 실행합니다.
CMD [ "node", "dist/main.js" ]