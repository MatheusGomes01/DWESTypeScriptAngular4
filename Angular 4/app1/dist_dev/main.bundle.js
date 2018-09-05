webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-topo></app-topo>\n<div *ngIf=\"jogoEmAndamento; else fimDejogo\">\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n<ng-template #fimDejogo>\n    <div *ngIf=\"Encerramento === 'Perdeu'; else fimDejogoVitoria\" class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color:red\">You Failed ;-;</h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #fimDejogoVitoria>\n       <div class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color:green\">You winner ;-;</h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.Encerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.Encerramento = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("./src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("./src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("./src/app/progresso/progresso.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/painel/frase-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseEng: 'I like to lean', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch tv', frasePtBr: 'Eu assisto Tv' },
    { fraseEng: 'How are you ?', frasePtBr: 'Como vai você ?' },
    { fraseEng: 'I eat bread', frasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    margin-top:20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}"

/***/ }),

/***/ "./src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progresso [progress]=\"progress\"></app-progresso>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-end\">\n          <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <h6>{{ instrucao }}</h6>\n        <p>{{ rodadaFrase.fraseEng }}</p>\n\n        <div class=\"form-group\">\n          <textarea \n          class=\"form-control\"\n          rows=\"3\"\n          (input)=\"atualizaResposta($event)\"\n          [value]=\"resposta\" >\n        </textarea>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"d-flex justify-content-end\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"verificaResposta()\">Verificar</button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frase_mock__ = __webpack_require__("./src/app/painel/frase-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.instrucao = 'Traduza a frase:';
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frase_mock__["a" /* FRASES */];
        this.resposta = '';
        this.rodada = 0;
        this.progress = 0;
        this.tentativas = 3;
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.AtualizaRodada();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    //one-way-binding permite um data bite na direção de um component ao HTML
    //two-way-binding ação do HTML que impacta novamente no component (ciclo)
    PainelComponent.prototype.ngOnDestroy = function () {
    };
    //se não colocar o visualizador de visibilidade o TS lê como public
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    };
    PainelComponent.prototype.verificaResposta = function () {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //trocar pergunta da rodada
            this.rodada++;
            //progresso
            this.progress = this.progress + (100 / this.frases.length);
            if (this.rodada === 4) {
                this.encerrarJogo.emit('Vitoria');
            }
            //atualiza o objeto de frase
            this.AtualizaRodada();
        }
        else {
            //diminuir tentativas
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('Perdeu');
            }
        }
    };
    PainelComponent.prototype.AtualizaRodada = function () {
        //define a frase da rodada com base em alguma logica
        this.rodadaFrase = this.frases[this.rodada];
        //limpa resposta
        this.resposta = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-painel',
            template: __webpack_require__("./src/app/painel/painel.component.html"),
            styles: [__webpack_require__("./src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/***/ (function(module, exports) {

module.exports = ".progress{\n    background: #EEF8DA;\n    border: solid 1px #99CE28;\n}\n\n.progress-bar{\n\n\n    background: #99CE28;\n}"

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"progress\">\n    <div class=\"progress-bar w-{{ progress }}\" role=\"progressbar\"  aria-valuemin=\"0\" aria-valuemax=\"100\">{{ progress }}%</div>\n  </div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progress = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressoComponent.prototype, "progress", void 0);
    ProgressoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progresso',
            template: __webpack_require__("./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__("./src/app/progresso/progresso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracao; });
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = '/assets/coracao_cheio.png'; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = '/assets/coracao_vazio.png'; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- property binding (faz com que atributos da classe dos componenetes sejam \n    associado a atributos do html-->\n\n<!--<img [src]=\"coreVazio\">\n<img [src]=\"coreVazio\">\n<img [src]=\"coreVazio\">\n<img [src]=\"coreVazio\">\n<img [src]=\"coreVazio\">\n<img [src]=\"coreVazio\">\n-->\n\n\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\"/>"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__ = __webpack_require__("./src/app/shared/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracoes = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true)
        ];
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tentativas',
            template: __webpack_require__("./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__("./src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background:#1CB0F6\n}\n.apd{\n    color: white\n}"

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-faded\">\n   <h1 class=\"navbar-brand mb-0 apd\">{{ titulo }}</h1> \n</nav>"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês';
    }
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("./src/app/topo/topo.component.html"),
            styles: [__webpack_require__("./src/app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map