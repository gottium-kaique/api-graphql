function up({schema, fn}) {
  return schema.createTable("users", table => {
    table.increments()
    table.string("name").notNullable()
    table.string("email").notNullable().unique()
    table.integer("age").notNullable()
    table.string("password").notNullable()
    table.timestamp("created_at").defaultTo(fn.now())
  })
}

function down({schema}) {
  return schema.dropTable("users")
}

module.exports = {
  up,
  down,
}