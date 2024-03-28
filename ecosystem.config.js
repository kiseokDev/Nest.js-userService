module.exports = [
  {
    script: 'dist/apps/nestjs-back/main.js',
    name: 'nestjs-crawl-app',
    exec_mode: 'cluster',
    instances: 1,
    env: {
      // 공통 환경 변수
      COMMON_ENV_VAR: 'true',
    },
    env_development: {
      // 개발 환경에서만 적용될 환경 변수
      NODE_ENV: 'development',
      DEBUG_MODE: 'true',
    },
    env_production: {
      // 프로덕션 환경에서만 적용될 환경 변수
      NODE_ENV: 'production',
    },
    env_staging: {
      NODE_ENV: 'staging',
    },
  },
];
