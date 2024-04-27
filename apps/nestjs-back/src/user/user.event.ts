import { IEvent } from '@nestjs/cqrs';

export abstract class CqrsEvent {
  constructor(readonly name: string) {}
}

export class TestEvent extends CqrsEvent implements IEvent {
  constructor() {
    super(TestEvent.name);
  }
}

export class UserCreatedEvent extends CqrsEvent implements IEvent {
  constructor(
    readonly email: string,
    readonly signupVerifytoken: string,
  ) {
    super(UserCreatedEvent.name);
  }
}
