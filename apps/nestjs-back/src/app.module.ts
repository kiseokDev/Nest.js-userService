import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import databaseConfig from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { Connection } from 'mongoose';
import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import { OrderModule } from './order/order.module';
import { HealthCheckModule } from './healthCheck/healthCheck.module';
import { BatchModule } from './batch/batch.module';
import { UserModule } from './user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import { CustomCacheModule } from './cache/cache.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import authConfig from './config/authConfig';
import emailConfig from './config/emailConfig';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
console.log('dirname:', __dirname);
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'apps/nestjs-back/src/schema.gql'),
    }),
    ConfigModule.forRoot({
      load: [databaseConfig, authConfig, emailConfig],
      envFilePath: [
        // `apps/nestjs-back/src/config/env/.env.${process.env.NODE_ENV}`,
        `${__dirname}/config/env/.env.${process.env.NODE_ENV}`,
      ],
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
        connectionFactory: (connection: Connection) => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          connection.plugin(require('mongoose-autopopulate'));
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    CacheModule.register({
      max: 10, // maximum number of items in cache
      isGlobal: true,
      ttl: 10000,
    }),
    CustomCacheModule,
    CatModule,
    ProductModule,
    StocksModule,
    OrderModule,
    HealthCheckModule,
    BatchModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
    //Glbal CacheInterceptor
  ],
})
export class AppModule {}
