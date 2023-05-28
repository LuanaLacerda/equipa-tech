const express = require("express");
const usuarios = require('./controladores/usuarios');
const rotas = express();
const login = require('./controladores/login');
//const verificaLogin = require('./filtros/verificarLogin');



//Cadastro usuario
rotas.post('/usuario', usuarios.cadastrarUsuario);

//login
rotas.post('/login', login);

//filtro para veriicar login
//rotas.use(verificaLogin);

//obter, atualizar usuario
rotas.get('/usuario', usuarios.listarDadosUsuarioLogado);
rotas.put('/usuario', usuarios.atualizarUsuario);
rotas.get('/usuario/:id');





module.exports = rotas;