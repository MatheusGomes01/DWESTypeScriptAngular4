"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var pessoa_1 = require("./pessoa");
var concessionaria_1 = require("./concessionaria");
/* --- criar carros --- */
var carroA = new carro_1["default"]('Dodger Journey', 4);
var carroB = new carro_1["default"]('Lamborguini', 4);
var carroC = new carro_1["default"]('Mustang', 4);
/* --- montar lista de carros da concessionaria ---*/
var ListaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1["default"]('Av Laranja da China', ListaDeCarros);
/*--- exibir lista de carro --- */
//console.log(concessionaria.mostrarListaDeCarros())
/*-- comprar o carro */
var cliente = new pessoa_1["default"]('Matheus', 'Lamborguini');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
