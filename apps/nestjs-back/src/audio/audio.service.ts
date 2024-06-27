import { InjectQueue } from '@nestjs/bull';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JobOptions, Queue } from 'bull';

@Injectable()
export class AudioService implements OnModuleInit {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}
  onModuleInit() {
    this.audioQueue.on('failed', async (job, err) => {
      console.error(`Job failed ${job.id}:`, err);
      // 필요한 경우 여기에서 추가적인 실패 처리 로직을 구현할 수 있습니다.
      // 예: 실패한 작업을 데이터베이스에 기록
      await job.remove(); // 실패한 작업을 큐에서 제거
    });

    this.audioQueue.on('completed', async (job, result) => {
      console.log(`Job completed ${job.id} with result ${result}`);
    });

    this.audioQueue.on('progress', async (job, progress) => {
      console.log(`Job ${job.id} progress: ${progress}%`);
    });
  }

  async addJob() {
    const option: JobOptions = {
      attempts: 5,
    };
    await this.audioQueue.add('error', { foo: 'bar-error' }, option);
    // await this.audioQueue.add({ foo: 'bar-delayed' }, { delay: 5000 });
    // await this.audioQueue.add({ foo: 'bar-attemp' }, option);
  }

  async addTranscodeJob() {
    await this.audioQueue.add('transcode', { foo: 'bar-transcode' });
  }

  sendEmail() {
    this.audioQueue.add('sendEmail', {
      mailOptions: 'test',
    });
  }
}
