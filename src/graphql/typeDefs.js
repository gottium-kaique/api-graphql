import { fileLoader, mergeTypes } from "merge-graphql-schemas"
import { join } from "path"

const typeDefsArray = fileLoader(join(__dirname, "modules", "**", "*.gql"))
const typeDefs = mergeTypes(typeDefsArray)

export default typeDefs