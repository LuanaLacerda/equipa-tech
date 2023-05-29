require('dotenv').config();

const knex = require('knex');
const knexConfig = require('./knexfile.js');

const environment = process.env.NODE_ENV || 'development';
const connection = knex(knexConfig[environment]);


const express = require('express');
const rotas = require('./rotas');
const app = express();
const cors = require('cors')


app.use(express.json());


app.use(express.json());
app.use(rotas);
app.use(cors());


module.exports = app