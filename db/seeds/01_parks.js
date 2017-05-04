exports.seed = (knex) => {
  return knex('parks').insert([
    {
      id: 1,
      name: 'Cedar Point',
      city: 'Sandusky',
      state: 'Ohio'
    },
    {
      id: 2,
      name: 'Six Flags Great Adventure',
      city: 'Jackson',
      state: 'New Jersey'
    },
    {
      id: 3,
      name: 'Kings Dominion',
      city: 'Doswell',
      state: 'Virginia'
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('parks_id_seq', (SELECT MAX(id) FROM parks));"
    )
  })
}
