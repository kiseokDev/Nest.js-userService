import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './healthCheck.controller';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DogHealthIndicator } from './doghealth';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthCheckController],
  providers: [DogHealthIndicator],
})
export class HealthCheckModule {}
