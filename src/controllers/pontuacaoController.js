var pontuacaoModel = require("../models/pontuacaoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA pontucaoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    pontuacaoModel.listar()
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
    var id = req.body.idServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    
  

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    }  else if (erros == undefined) {
        res.status(400).send("Sua erros está undefined!");
    }
    else if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo personagemModel.js
        pontuacaoModel.cadastrar(id,acertos, erros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o Insert de pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar
}