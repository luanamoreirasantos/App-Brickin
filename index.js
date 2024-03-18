const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Porta que o servidor irá rodar

// Configuração do body-parser para lidar com requisições JSON
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // Isso cria um banco de dados SQLite na memória, para fins de exemplo. Para um aplicativo real, você usaria um arquivo de banco de dados real.

