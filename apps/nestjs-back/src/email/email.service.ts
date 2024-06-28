import { Inject, Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import emailConfig from '../config/emailConfig';
import { ConfigType } from '@nestjs/config';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

export interface EmailOption {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;
  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
    @InjectQueue('email') private emailQueue: Queue,
  ) {
    //TODO : config 설정으로 빼기
    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }
  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifytoken: string,
  ) {
    const baseUrl = this.config.baseUrl;
    const url = `${baseUrl}/users/email-verify`;

    const mailOptions: EmailOption = {
      to: emailAddress,
      subject: '가입 인증 메일입니다22되냐???',
      html: `
        <h1>가입 인증 메일입니다.</h1>
      <form action="${url}" method="POST">
        <input type="hidden" name="signupVerifyToken" value="${signupVerifytoken}" />
        <button type="submit">가입확인</button>
      </form>
      `,
    };
    // return await this.transporter.sendMail(mailOptions);
    this.emailQueue.add('sendEmail', {
      mailOptions,
    });
  }
}
export type EmailData = {
  mailOptions: EmailOption;
  transporter: Mail;
};
