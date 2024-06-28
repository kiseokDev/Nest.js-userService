import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Request } from 'express';

interface CustomRequest extends Request {
  user: any;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: CustomRequest = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request: CustomRequest) {
    const jwtString = request.headers.authorization.split('Bearer ')[1];
    const user = this.authService.verify(jwtString);
    request.user = user;
    return true;
  }
}
