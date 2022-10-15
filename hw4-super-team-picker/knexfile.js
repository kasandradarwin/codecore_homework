// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: 'pg',
  connection: {
    database: 'team-picker',
      user:     'nimbus-user',
      password: 'password'
    },
    migrations: {
      tableName: 'migrations'
    },

  production: {
    client: 'postgresql',
    connection: {
      database: 'team-picker',
      user:     'nimbus-user',
      password: 'password'
    },
    seeds: {
    directory:"./db/seeds"
  }
}
}
 }
