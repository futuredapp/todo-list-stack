import { Query, Resolver } from '@nestjs/graphql'
import { TodoService } from '../services/todo.service'

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => String)
  hello(): string {
    return this.todoService.getHello()
  }
}
