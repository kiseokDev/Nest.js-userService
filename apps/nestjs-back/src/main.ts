import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const PORT = parseInt(process.env.PORT || '3001', 10);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT, () => {
    Logger.log(`🚀 Application running at port ${PORT}`);
  });
}
bootstrap();
