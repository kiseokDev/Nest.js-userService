module.exports = [
  {
    script: 'dist/apps/nestjs-back/main.js',
    name: 'nestjs-crawl-app',
    exec_mode: 'cluster',
    instances: 2,
  },
];
