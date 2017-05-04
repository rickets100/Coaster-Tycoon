exports.up = (knex) => {
  return knex.schema.createTable('rides', table => {
    table.increments()
    table.string('name')
    table.integer('capacity')
    table.integer('popularity')
    table.integer('park_id')
    table.foreign('park_id').references('parks.id')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('rides')
}
