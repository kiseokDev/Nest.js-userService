import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';

export interface Dog {
  name: string;
  type: string;
}

@Injectable()
export class DogHealthIndicator extends HealthIndicator {
  private dogs: Dog[] = [
    { name: 'Rex', type: 'goodboy' },
    { name: 'Max', type: 'badboy' },
  ];

  async isDogHealthy(key: string): Promise<HealthIndicatorResult> {
    const badboys = this.dogs.filter((dog) => dog.type === 'badboy');
    const isHealthy = badboys.length === 0;
    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });

    if (isHealthy) {
      return result;
    }
    throw new HealthCheckError('Dog check failed', result);
  }
}
