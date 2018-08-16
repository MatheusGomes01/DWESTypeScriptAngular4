"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coreVazio = '/assets/coracao_vazio.png';
        this.coreCheio = '/assets/coracao_cheio.png';
    }
    TentativasComponent.prototype.ngOnInit = function () {
    };
    TentativasComponent = __decorate([
        core_1.Component({
            selector: 'app-tentativas',
            templateUrl: './tentativas.component.html',
            styleUrls: ['./tentativas.component.css']
        })
    ], TentativasComponent);
    return TentativasComponent;
}());
exports.TentativasComponent = TentativasComponent;
