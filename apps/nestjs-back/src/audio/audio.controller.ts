import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class QueueController {
  constructor(private audioService: AudioService) {}

  @Get()
  async addQueue() {
    // await this.audioService.addAudioFooBarJob();
    this.audioService.addTranscodeJob();
    // this.audioService.addAudioFooBarJob();
  }

  @Get('error')
  errorAccur() {
    this.audioService.addJob();
  }
}
