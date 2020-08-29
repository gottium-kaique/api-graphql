import startServer from "./startServer"
import resolvers from "./graphql/resolvers"
import typeDefs from "./graphql/typeDefs"

startServer({
  resolvers,
  typeDefs,
})