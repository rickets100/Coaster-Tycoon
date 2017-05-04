const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/coaster_tycoon_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/coaster_tycoon_test',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
