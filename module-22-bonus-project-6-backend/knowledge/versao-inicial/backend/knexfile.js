// Update with your config settings.

module.exports = {
    client: 'pg',
    connection: {
        database: 'app',
        user:     'postgres',
        password: 'postgres',
        host:     'postgres',
        port:     5432,
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
