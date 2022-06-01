var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.get("/", function (req, res) {
    pontuacaoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    pontuacaoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de personagemController.js
router.post("/cadastrar", function (req, res) {
    pontuacaoController.cadastrar(req, res);
})


module.exports = router;