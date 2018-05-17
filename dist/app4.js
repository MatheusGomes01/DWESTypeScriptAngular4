"use strict";
exports.__esModule = true;
//import { ConcessionarioDAO } from './concessionarioDAO'
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
//import { PessoaDao } from './pessoaDAO';
var DAO_1 = require("./DAO");
//let dao: ConcessionarioDAO = new ConcessionarioDAO()
var concessionaria = new concessionaria_1["default"]('', []);
//let dao2: PessoaDao = new PessoaDao()
var pessoa = new pessoa_1["default"]('', '');
var dao3 = new DAO_1.DAO();
var dao4 = new DAO_1.DAO();
dao3.inserir(concessionaria);
dao4.remover(5);
