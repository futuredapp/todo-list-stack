import { boot } from 'quasar/wrappers'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

const GRAPHQL_URL = process.env.GRAPHQL_URL

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
  }),
  cache,
})

export default boot(({ app }) => {
  app.provide(DefaultApolloClient, apolloClient)
})
