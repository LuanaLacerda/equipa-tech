const knex = require('knex')({
    client: 'pg',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "270808",
        database: "equipa_tech",
        port: "5432"
        //ssl: {
        //    rejectUnauthorized: false
        //  }
    }
});

module.exports = knex