const knex = require('../conexao');

const cadastrarEquipamentos = async (req, res) => {

    const { nome, ram, memoria, estado_bateria, data_cadastro, usuario_id, doacao_id } = req.body

    if (!nome || !ram || !memoria || !estado_bateria) {
        return res.status(400).json({ messagem: "Todos os campos são obrigatórios" })
    };

    try {

        const doacao = await knex('equipamentos').insert({
            nome,
            ram,
            memoria,
            estado_bateria,
            data_cadastro
        })

        if (!doacao) {
            return res.status(400).json('Equipamento não foi cadastrado.')
        }

        return res.status(201).json('Equipamento cadastrado com sucesso.')

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = cadastrarEquipamentos