exports.seed = (knex) => {
  return knex('rides').insert([
    { id: 1, name: 'Blue Streak', capacity: 24, popularity: 4, park_id: 1 },
    { id: 2, name: 'Corkscrew', capacity: 20, popularity: 4, park_id: 1 },
    { id: 3, name: 'Gemini', capacity: 36, popularity: 5, park_id: 1 },
    { id: 4, name: 'Nitro', capacity: 12, popularity: 5, park_id: 2 },
    { id: 5, name: 'Bugaboo', capacity: 30, popularity: 2, park_id: 2 },
    { id: 6, name: 'Buccaneer', capacity: 60, popularity: 4, park_id: 2 },
    { id: 7, name: 'The Joker', capacity: 42, popularity: 3, park_id: 2 },
    { id: 8, name: 'Bizarro', capacity: 32, popularity: 5, park_id: 2 },
    { id: 9, name: 'Grizzly', capacity: 22, popularity: 3, park_id: 3 },
    { id: 10, name: 'Delirium', capacity: 34, popularity: 4, park_id: 3 }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('rides_id_seq', (SELECT MAX(id) FROM rides));"
    )
  })
}
