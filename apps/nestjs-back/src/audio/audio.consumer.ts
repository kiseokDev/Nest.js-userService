import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';

@Processor('audio')
export class AudioConsumer {
  @Process('transcode')
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      progress += 1;
      console.log(`transcoding audio...`);
      job.progress(progress);
    }
  }

  @Process()
  async join(job: Job<unknown>) {
    console.log(`joining audio...`);
    console.log(job.data);
  }

  @Process('error')
  async errorOccur(job: Job<unknown>) {
    console.log(`error occur...`);
    console.log(job.data);
    throw new Error('error occur');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    console.log(
      `Completed job ${job.id} of type ${job.name} with result ${result}`,
    );
  }

  @OnQueueFailed()
  onFailed(job: Job, error: any) {
    console.log(
      `Failed job ${job.id} of type ${job.name} with error ${error.message}`,
    );
  }
  doSomthing(data: unknown) {
    console.log(`do something with ${data}`);
  }
}
