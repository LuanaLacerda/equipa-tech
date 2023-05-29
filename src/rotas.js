const express = require("express");
const rotas = express();
const doacoes = require('./controladores/doacoes');
//const equipamentos = require('./controladores/equipamentos')
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificaLogin');


//Cadastro usuario
rotas.post('/usuario', usuarios.cadastrarUsuario);
//Cadastro doação
rotas.post('/doacao', doacoes);
//Cadastro equipamento
//rotas.post('/equipamento', equipamentos);
//login
rotas.post('/login', login);

//filtro para veriicar login
rotas.use(verificaLogin);

//obter, atualizar usuario
rotas.get('/usuario', usuarios.listarDadosUsuarioLogado);
rotas.put('/usuario', usuarios.atualizarUsuario);



module.exports = rotas;