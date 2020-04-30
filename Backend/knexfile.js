
module.exports = {
    development: {
        client: 'mysql',
        connection: {
            database: 'philcopms',
            user: 'pms',
            password: 'philco123',
            host: 'mysql669.umbler.com',
            port: '41890',
        },
        migrations: {
            directory: __dirname + '/database/migrations',
        },
        seeds: {
            directory: __dirname + '/database/seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
}