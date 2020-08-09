import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
// import { TasksController } from './task/tasks.controller';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
