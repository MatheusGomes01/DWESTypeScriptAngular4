import { Component, OnInit } from '@angular/core';

import { frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: frase [] = FRASES
  resposta: string
  constructor() { console.log(this.frases)}

  ngOnInit() {
  }

  //one-way-binding permite um data bite na direção de um component ao HTML
  //two-way-binding ação do HTML que impacta novamente no component (ciclo)

  //se não colocar o visualizador de visibilidade o TS lê como public
  public atualizaResposta(resposta: Event):void {
    this.resposta =  (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }
  
  public verificaResposta(): void {
    //consolo
  }
}
