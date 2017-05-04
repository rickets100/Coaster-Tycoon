exports.up = (knex) => {
  return knex.schema.createTable('parks', table => {
    table.increments()
    table.string('name')
    table.string('city')
    table.string('state')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('parks')
}
