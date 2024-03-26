import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import configuration from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
        dbName: configService.get<string>('DATABASE_NAME'),
        auth: {
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASS'),
        },
        connectionFactory: (connection) => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          connection.plugin(require('mongoose-autopopulate'));
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    Logger.log(
      `🚀 Application running at port ${this.configService.get('PORT')}`,
    );
    Logger.log('DATABASE_URI', this.configService.get('DATABASE_URI'));
    Logger.log('DATABASE_NAME', this.configService.get('DATABASE_NAME'));
    Logger.log('DATABASE_USER', this.configService.get('DATABASE_USER'));
    Logger.log('DATABASE_PASS', this.configService.get('DATABASE_PASS'));
  }
}
