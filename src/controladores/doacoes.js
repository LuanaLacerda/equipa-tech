const knex = require('../knexfile');

const cadastrarDoacoes = async (req, res) => {
    const { nome, cpf_cnpj, data_nascimento, telefone, email } = req.body

    if (!nome || !cpf_cnpj || !data_nascimento || !telefone || !email) {
        return res.status(400).json({ messagem: "Todos os campos são obrigatórios" })
    };

    try {

        const doacao = await knex('doacoes').insert({
            nome,
            cpf_cnpj,
            data_nascimento,
            telefone,
            email
        })

        if (!doacao) {
            return res.status(400).json('Doação não foi cadastrado.')
        }

        return res.status(201).json('Doação cadastrado com sucesso.')

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = cadastrarDoacoes