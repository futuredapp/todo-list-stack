import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Todo } from 'src/entities/todo.entity'

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>,
  ) {}

  async create(
    { content }: { content: string }
  ): Promise<Todo> {
    return this.todoModel.create({
      content: content
    })
  }

  async findOne(filter: FilterQuery<Todo>): Promise<Todo | null> {
    return this.todoModel.findOne(filter);
  }

  async deleteOne(filter: FilterQuery<Todo>): Promise<void> {
    await this.todoModel.deleteOne(filter)
  }

  async toggleCompleted(_id: string): Promise<Todo | null> {
    return this.todoModel.findOneAndUpdate({ _id }, { $set: { completed: { $not: "$completed" } } }, {new: true});
  }

  async findMany(filter: FilterQuery<Todo>): Promise<Todo[]> {
    return this.todoModel.find(filter);
  }
}