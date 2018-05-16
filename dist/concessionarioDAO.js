"use strict";
exports.__esModule = true;
var concessionaria_1 = require("./concessionaria");
var ConcessionarioDAO = /** @class */ (function () {
    function ConcessionarioDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionarioDAO.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ConcessionarioDAO.prototype.atualizar = function (object) {
        console.log('lcógica update');
        return true;
    };
    ConcessionarioDAO.prototype.remover = function (id) {
        console.log('lógica delete');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionarioDAO.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionarioDAO.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new concessionaria_1["default"]('', [])];
    };
    return ConcessionarioDAO;
}());
exports.ConcessionarioDAO = ConcessionarioDAO;
