import { EmailService } from './../email/email.service';
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as uuid from 'uuid';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<User>,
    private emailService: EmailService,
    private authService: AuthService,
  ) {}
  async verifyEmail(signupVerifyToken: string): Promise<string> {
    const user = await this.model.findOne({ signupVerifyToken });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
    // TODO
    // 1. DB 에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
    // 2. 바로 로그인 상태가 되도록 JWT 발급
    return this.authService.login({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  async login(email: string, password: string): Promise<string> {
    // 유저존재하는지 확인
    // 유저 존재하면 jwt 토큰 발생
    throw new Error('Method not implemented.');
  }

  private async checkUserExist(email: string) {
    return this.model.findOne({ email });
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    const user = new this.model({
      name,
      email,
      password,
      signupVerifyToken,
    });
    return user.save();
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    // 이메일 보내기
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async createUser(name: string, email: string, password: string) {
    const user = await this.checkUserExist(email);
    if (user) {
      throw new UnprocessableEntityException('이미 가입된 이메일입니다.');
    }
    const signupVerifyToken = uuid.v1();
    // TODO: BullQueue를 사용하여 비동기로 이메일 전송
    await this.sendMemberJoinEmail(email, signupVerifyToken);
    await this.saveUser(name, email, password, signupVerifyToken);
  }

  getUserInfo(userId: string): Promise<User> {
    // TODO
    // 1. userId로 유저 정보 조회
    return this.model.findById(userId).exec();
  }
}
