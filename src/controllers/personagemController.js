var personagemModel = require("../models/personagemModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA persongemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    personagemModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelido = req.body.apelidoServer;
    var origem = req.body.origemServer;
  

    // Faça as validações dos valores
    if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    }  else if (origem == undefined) {
        res.status(400).send("Sua origem está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo personagemModel.js
        personagemModel.cadastrar(apelido, origem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}