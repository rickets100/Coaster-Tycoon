exports.seed = (knex) => {
  return knex('rides').del()
    .then(() => knex('parks').del())
}
