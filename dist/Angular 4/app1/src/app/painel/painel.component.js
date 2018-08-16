"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frase_mock_1 = require("./frase-mock");
var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.instrucao = 'Traduza a frase:';
        this.frases = frase_mock_1.FRASES;
        this.resposta = '';
        this.rodada = 0;
        this.progress = 0;
        this.rodadaFrase = this.frases[this.rodada];
        console.log(this.rodadaFrase);
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    //one-way-binding permite um data bite na direção de um component ao HTML
    //two-way-binding ação do HTML que impacta novamente no component (ciclo)
    //se não colocar o visualizador de visibilidade o TS lê como public
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    };
    PainelComponent.prototype.verificaResposta = function () {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            alert('Translate correct');
            //trocar pergunta da rodada
            this.rodada++;
            //progresso
            this.progress = this.progress + (100 / this.frases.length);
            console.log(this.progress);
            //atualiza o objeto de frase
            this.rodadaFrase = this.frases[this.rodada];
            //limpa resposta
            this.resposta = '';
        }
        else {
            alert('Translate not correct');
        }
    };
    PainelComponent = __decorate([
        core_1.Component({
            selector: 'app-painel',
            templateUrl: './painel.component.html',
            styleUrls: ['./painel.component.css']
        })
    ], PainelComponent);
    return PainelComponent;
}());
exports.PainelComponent = PainelComponent;
