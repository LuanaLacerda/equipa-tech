const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, cpf, genero, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !genero || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ messagem: "Todos os campos são obrigatórios" })
    };

    try {
        const usuarioExiste = await knex('usuarios').where({ cpf }).first()

        if (usuarioExiste) {
            return res.status(400).json('Usuário informado já existe.')
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios').insert({
            nome,
            cpf,
            genero,
            data_nascimento,
            telefone,
            email,
            senha: senhaCriptografada
        })

        if (!usuario) {
            return res.status(400).json('Usuário não foi cadastrado.')
        }

        return res.status(201).json('Usuário cadastrado com sucesso.')

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const listarDadosUsuarioLogado = async (req, res) => {
    return res.status(200).json(req.usuario)
}

const atualizarUsuario = async (req, res) => {

    let { nome, genero, data_nascimento, telefone, email, senha } = req.body
    const { id } = req.usuario;
    // //TO DO caso consiga criar o banco não será necessario 
    if (!nome && !genero && !data_nascimento && !telefone && !email && !senha) {
        return res.status(400).json({ messagem: "É necessario informar ao menos um campo para atualizar" })
    };

    try {
        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        };


        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios').where({ email }).first();

            if (emailUsuarioExiste) {
                return res.status(404).json('O email já existe.')
            };
        };


        const usuarioAtualizado = await knex('usuarios')
            .where({ id })
            .update({
                nome,
                genero,
                data_nascimento,
                telefone,
                email,
                senha
            })

        if (!usuarioAtualizado) {
            return res.status(400).json('Usuário não foi atualizado.')
        }

        return res.status(200).json('Usuário atualizado com sucesso.')



    } catch (error) {
        return res.status(400).json(error.message);
    }



}



module.exports = {
    listarDadosUsuarioLogado,
    cadastrarUsuario,
    atualizarUsuario,

}