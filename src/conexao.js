const knex = require('knex')({
    client: 'pg',
    host: "postgres://wtpbaznz:L31ezxjvjIWge4Nelnd8hxnidBrJJYIS@silly.db.elephantsql.com/wtpbaznz",
    user: "wtpbaznz",
    password: "L31ezxjvjIWge4Nelnd8hxnidBrJJYIS",
    database: "wtpbaznz",
    port: "5432",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = knex