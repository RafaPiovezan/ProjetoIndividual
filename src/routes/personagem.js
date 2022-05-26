var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/", function (req, res) {
    personagemController.testar(req, res);
});

router.get("/listar", function (req, res) {
    personagemController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de personagemController.js
router.post("/cadastrar", function (req, res) {
    personagemController.cadastrar(req, res);
})


module.exports = router;