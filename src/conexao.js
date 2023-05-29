const knex = require('knex')({
    client: 'pg',
    connection: {
        host: "postgres://wtpbaznz:H9N8nkTyRFIhMw99xP9752T4kXX7faoR@silly.db.elephantsql.com/wtpbaznz",
        user: "wtpbaznz",
        password: "H9N8nkTyRFIhMw99xP9752T4kXX7faoR",
        database: "wtpbaznz",
        port: "5432"
    }
});

module.exports = knex