import connect from "../../../database/connect"
import { hashSync, compareSync } from "bcryptjs"

export default {
  Query: {
    user: async (_, { email }) => {
      const [user] = await connect("users").where({ email })
      delete user.password
      return user
    }
  },
  Mutation: {
    createUser: async (_, {data}) => {
      const trx = await connect.transaction()
      data.password = hashSync(data.password, 8)
      const user = await trx("users").insert(data)

      await trx.commit()
      
      return data
    },
    deleteUser: async (_, { email, password }) => {
      const [user] = await connect("users").where({email})

      if (compareSync(password, user.password)) {
        const deletedUser = await connect("users").where({email}).delete()
        return true
      }

      return false
    },
    updateUser: async (_, { id, password, data }) => {
      const [user] = await connect("users").where({id})

      if (compareSync(password, user.password)) {
        if (data.password) {
          data.password = hashSync(data.password, 8)
        }
        await connect("users").where({id}).update(data)

        return true
      }

      return false
    }
  }
}