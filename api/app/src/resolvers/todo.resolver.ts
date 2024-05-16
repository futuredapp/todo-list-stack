import { Args, Query, Mutation, Resolver, ID, ResolveField, Parent } from '@nestjs/graphql'
import { TodoService } from '../services/todo.service'
import { Todo } from 'src/entities/todo.entity'
import { TaskCreateInput } from 'src/inputs/task-create.input'

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => Todo)
  async createTask(
    @Args('input')
    input: TaskCreateInput,
  ): Promise<Todo> {
    return this.todoService.create(input)
  }

  @Query(() => [Todo], { nullable: 'items' })
  async tasks(): Promise<Todo[]> {
    return this.todoService.findMany({});
  }

  @Query(() => Todo, { nullable: true })
  async task(
    @Args('id', { type: () => ID }) _id: string
  ): Promise<Todo> {
      return this.todoService.findOne({_id});
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteTask(
    @Args('id', { type: () => ID }) _id: string
  ): Promise<Boolean> {
    this.todoService.deleteOne({ _id });
    return true;
  }

  @Mutation(() => Todo, { nullable: true })
  async toggleCompleted(
    @Args('id', { type: () => ID }) id: string,  
  ): Promise<Todo> {
   return this.todoService.toggleCompleted(id)
  }

  @ResolveField(() => ID)
  id(@Parent() parent: Todo) {
    return parent._id
  }
}
