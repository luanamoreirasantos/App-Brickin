// Importações necessárias
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Porta que o servidor irá rodar

// Configuração do body-parser para lidar com requisições JSON
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // Isso cria um banco de dados SQLite na memória, para fins de exemplo. Para um aplicativo real, você usaria um arquivo de banco de dados real.

// Criação da tabela de clientes
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)");
});

// Rota para criar um novo cliente
app.post('/clients', (req, res) => {
    const { name, email, password } = req.body;

    // Verifique se todos os campos foram fornecidos
    if (!name || !email || !password) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    // Verifique se o email é válido
    if (!isValidEmail(email)) {
        return res.status(400).send('Email inválido');
    }

    // Verifique se o cliente já existe no banco de dados
    db.get("SELECT * FROM clients WHERE email = ?", [email], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao verificar o cliente');
        }
        if (row) {
            return res.status(400).send('O cliente já está cadastrado');
        }

        // Insira o novo cliente no banco de dados
        db.run("INSERT INTO clients (name, email, password) VALUES (?, ?, ?)", [name, email, password], (err) => {
            if (err) {
                return res.status(500).send('Erro ao adicionar cliente');
            }
            res.status(201).send('Cliente cadastrado com sucesso');
        });
    });
});

// Função para validar o formato do email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor Express rodando na porta ${port}`);
});
