const db = require('../db')

class Park {
  constructor () {}

  static all () {
    return db('parks')
  }

  static findById (id) {
    return db('parks').where({ id }).first()
  }
}

module.exports = Park
