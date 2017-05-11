const db = require('../db')

function ResourceFactory (table) {
  class Resource  {
    constructor () {}

    static all () {
      return db(table)
    }

    static findById (id) {
      return db(table).where({ id }).first()
    }

    static destroy(id) {
      return db(table).where({ id }).del()
    }

    static create(body) {
      return db(table).insert(body)
    }

    static update(body) {
      return db(table).where('id', body.id).update(body)
    }
  }
  return Resource
}

module.exports = ResourceFactory
