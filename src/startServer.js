import { ApolloServer } from "apollo-server"

const startServer = ({ typeDefs, resolvers }) => {
  const server = new ApolloServer({resolvers, typeDefs})
  server.listen().then(({ url }) => console.log(`Server started at ${url}`))
}

export default startServer