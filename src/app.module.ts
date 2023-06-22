import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/users.model';
import { TodolistModule } from './todolist/todolist.module';
import { TasksModule } from './tasks/tasks.module';
import { TodoList } from './todolist/todolist.model';
import { Task } from './tasks/tasks.model';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, TodoList, Task],
    }),
    TodolistModule,
    TasksModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}