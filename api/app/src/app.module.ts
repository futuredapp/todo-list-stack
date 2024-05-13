import { Module } from '@nestjs/common'
import { TodoService } from './services/todo.service'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TodoResolver } from './resolvers/todo.resolver'

const DATABASE_URL = process.env.DATABASE_URL

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL),
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
