require('dotenv').config();
try {
    const knex = require('knex')({
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT
        }
    });

    module.exports = knex;
} catch (error) {
    console.error('Erro ao configurar conexão com o banco de dados:', error);
}