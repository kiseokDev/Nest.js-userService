import { Process, Processor } from '@nestjs/bull';
import { EmailOption } from './email.service';
import { Inject } from '@nestjs/common';
import emailConfig from '../config/emailConfig';
import { ConfigType } from '@nestjs/config';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import { Job } from 'bull';

export type EmailData = {
  mailOptions: EmailOption;
  transporter: Mail;
};

@Processor('email')
export class EmailConsumer {
  private transporter: Mail;
  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  @Process('sendEmail')
  async sendEmail(job: Job<EmailData>) {
    console.log('this is sendEmail');
    const { mailOptions } = job.data;
    return await this.transporter.sendMail(mailOptions);
  }
}
