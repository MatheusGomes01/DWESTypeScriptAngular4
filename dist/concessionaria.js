"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.ListaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.ListaDeCarros;
    };
    Concessionaria.prototype.fornerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 08:00 as 18:00 e sabado das 08:00 as 12:00';
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
