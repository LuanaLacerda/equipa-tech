
module.exports = {
    development: {
        client: 'pg', // Defina o cliente como 'pg' para o PostgreSQL
        connection: {
            host: 'seu-host',
            port: 'sua-porta',
            user: 'seu-usuario',
            password: 'sua-senha',
            database: 'seu-banco-de-dados'
        }
    }
};