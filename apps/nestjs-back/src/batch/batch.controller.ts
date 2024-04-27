import { Controller, Get } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batch')
export class BatchConroller {
  constructor(private readonly scheduler: SchedulerRegistry) {}

  @Get('start-sample')
  async batch() {
    const job = this.scheduler.getCronJob('cronSample');
    job.start();
    console.log('start!!!!!', job.running);
    console.log('lastDate()', job.lastDate());
  }

  @Get('stop-sample')
  async stop() {
    const job = this.scheduler.getCronJob('cronSample');
    job.stop();
    console.log('stop!!!!!', job.running);
    console.log('lastDate()', job.lastDate());
  }
}
