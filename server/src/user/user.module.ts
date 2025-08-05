import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CheckDuplicateUserMiddleware } from 'src/middlewares/check-duplicate-user.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckDuplicateUserMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.POST });
  }
}
