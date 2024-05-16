import { Module } from '@nestjs/common'
import { TodoService } from './services/todo.service'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TodoResolver } from './resolvers/todo.resolver'
import { Todo, TodoSchema } from './entities/todo.entity'

const DATABASE_URL = process.env.DATABASE_URL

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL),
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
      cache: 'bounded',
      persistedQueries: false,
    }),
  ],
  controllers: [],
  providers: [TodoService, TodoResolver],
})
export class AppModule {}
