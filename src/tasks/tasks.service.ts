import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Task } from './entities/task.entity';

let task = [
  {  
    id: 1,
    title: "Nestjs",
    description: "Assignment 1",
    status: "In progress",
    dueDate: "2023-08-07T19:02:19.170Z'",
    createdAt: "2023-08-07T19:02:19.170Z",
    updatedAt: "2023-08-07T19:02:19.170Z"
  },
  {  
    id: 2,
    title: "Docker",
    description: "Training",
    status: "Completed",
    dueDate: "2023-08-07T19:02:19.170Z'",
    createdAt: "2023-08-07T19:02:19.170Z",
    updatedAt: "2023-08-07T19:02:19.170Z"
  },
  {  
    id: 3,
    title: "Python",
    description: "Training",
    status: "Draft",
    dueDate: "2023-08-07T19:02:19.170Z'",
    createdAt: "2023-08-07T19:02:19.170Z",
    updatedAt: "2023-08-07T19:02:19.170Z"
  }
]

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    console.log(createTaskDto)
    let data: any = createTaskDto;
    data["id"] = task.length+1;
    task.push(data)
    return task;
  }

  findAll() {
    return task;
  }

  findOne(id: number) {
    return task.find(at => at.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const index = task.findIndex(obj => {
      return obj.id === id;
    });
    
    task[index].title = updateTaskDto.title;
    task[index].description = updateTaskDto.description;
    task[index].status = updateTaskDto.status;
    return task[index]
  }

  remove(id: number) {
    const objWithIdIndex = task.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      task.splice(objWithIdIndex, 1);
    }
    return 'Task has been removed'
  }
}
