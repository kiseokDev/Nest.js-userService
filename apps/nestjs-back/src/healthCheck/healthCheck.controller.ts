import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';
import { DogHealthIndicator } from './doghealth';

@Controller('health-check')
export class HealthCheckController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly db: MongooseHealthIndicator,
    private dogHealthIndicator: DogHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      //   () => this.http.pingCheck('channelIn', 'https://channel-in.io/'),
      () => this.db.pingCheck('database'),
      () => this.dogHealthIndicator.isDogHealthy('dog'),
    ]);
  }
}
