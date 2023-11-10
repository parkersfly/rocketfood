exports.up = knex => knex.schema.createTable("plates", table => {
  table.increments("id")
  table.text("picture")
  table.text("title")
  table.text("category")
  table.integer("price")
  table.text("description")

  table.integer("user_id").references("id").inTable("users")
})


exports.down = knex => knex.schema.dropTable("plate")
