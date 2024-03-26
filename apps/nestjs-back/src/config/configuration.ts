export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DATABASE_URI: process.env.DATABASE_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASS: process.env.DATABASE_PASS,
});
