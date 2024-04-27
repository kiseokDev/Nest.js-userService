import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

// * * * * * *
// | | | | | |
// | | | | | day of week(요일, 0-7의 값을 가짐. 0과 7은 일요일)
// | | | | month(월, 0-12의 값을 가짐, 0과 12는 12월)
// | | | day of month(일, 1-31의 값을 가짐)
// | | hour(시간, 0-23의 값을 가짐)
// | minute(분, 0-59의 값을 가짐)
// second(초, 0-59의 값을 가짐, 선택사항)

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor(private readonly schedulerRegistry: SchedulerRegistry) {
    this.addCronJob();
  }

  //   @Interval('interval', 5000)
  //   handleInterval() {
  //     this.logger.debug('Called every 5 seconds');
  //   }

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_1AM)
  //   @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_1AM) //CronExpression으로 명시적으로 표현
  //   @Cron(new Date(Date.now() + 3 * 1000)) // 서버 실행후 3초 후 실행
  //   @Cron('* * * * * *', { name: 'crontTask' }) // 이름을 지정하여 중복 방지, 1초마다 실행
  async handleCron() {
    this.logger.log('TaskService.handleCron()');
  }

  addCronJob() {
    const name = 'cronSample';
    const job = new CronJob('* * * * * *', () => {
      this.logger.warn(`run! ${name}`);
    });
    this.schedulerRegistry.addCronJob(name, job);
    this.logger.warn(`Job ${name} added`);
  }

  //   @Cron('*/1 * * * * *', { name: 'unrefTrueTask', unrefTimeout: true })
  //   handleUnrefTrue() {
  //     this.logger.log('Unref True Task executed');
  //   }

  //@Cron 데커레이터의 두번 째 인수 CronOptions
  // name : cron job의 이름을 지정
  // timeZone : cron job의 시간대를 지정(기본값은 서버의 시간대,Asia/Seoul)
  // utcOffset : cron job의 UTC 오프셋을 지정(기본값은 0,한국 시간대는 9 혹은 문자열'+09:00')
  // unrefTimout : timeout.unref()와 관계있음. 이벤트 루프를 계속 실행하는 코드가 있고 크론잡의 상태에 관계없이 잡이 완료될 때 노드 프로세스를 중지하고 싶을때 사용
}
