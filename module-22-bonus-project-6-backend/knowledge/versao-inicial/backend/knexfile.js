// Update with your config settings.

module.exports = {
    client: 'pg',
    connection: {
        database: process.env.DB_DATABASE,
        user:     process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host:     process.env.DB_HOST,
        port:     process.env.DB_PORT,
    },
    // debug: true,
    pool: {
        min: 2,
        max: 10,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false // <- default is true, set to false
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
