import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { createServer } from 'http'

global.print = console.log

const typeDefs = `
  type Query {
    hello: String!
    anotherQuery: Int!
  }

  type Mutation {
    myMutation: String!
  }
`

let length = 0

const resolvers = {
  Query: {
    hello: () => `hello w${Array.from({ length }).reduce((acc, cur) => acc + 'o', '')}rld`,
    anotherQuery: () => Math.floor(Math.random() * 100) + 1
  },
  Mutation: {
    myMutation: () => {
      length++
      return 'success'
    }
  }
}

async function startApolloServer({typeDefs, resolvers}) {

  const app = express()

  const httpServer = createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => ({}),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  print(`Server ready at http://localhost:${4000}${server.graphqlPath}`);
}

startApolloServer({typeDefs, resolvers})
