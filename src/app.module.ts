import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Task } from './tasks/entities/task.entity';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    TasksModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.MARIADB_HOST,
    //   port: parseInt(process.env.MARIADB_PORT, 10),
    //   username: process.env.MARIADB_USER,
    //   password: process.env.MARIADB_PASSWORD,
    //   database: process.env.MARIADB_DATABASE,
    //   entities: [Task],
    //   synchronize: true, // to be removed for production
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
