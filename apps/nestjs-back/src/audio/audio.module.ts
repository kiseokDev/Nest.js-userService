import { Module } from '@nestjs/common';
import { AudioConsumer } from './audio.consumer';
import { AudioService } from './audio.service';
import { QueueController } from './audio.controller';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
  controllers: [QueueController],
  providers: [AudioService, AudioConsumer],
})
export class QueueModule {}
