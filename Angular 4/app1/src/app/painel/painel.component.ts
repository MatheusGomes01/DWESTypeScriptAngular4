import { Component, OnInit } from '@angular/core';

import { frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: frase [] = FRASES
  resposta: string

  public rodada:number = 0
  public rodadaFrase: frase 


  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  //one-way-binding permite um data bite na direção de um component ao HTML
  //two-way-binding ação do HTML que impacta novamente no component (ciclo)

  //se não colocar o visualizador de visibilidade o TS lê como public
  public atualizaResposta(resposta: Event):void {
    this.resposta =  (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }
  
  public verificaResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('Translate correct')

      //trocar pergunta da rodada
    this.rodada++

    //atualiza o objeto de frase
    this.rodadaFrase = this.frases[this.rodada]

    }else {
      alert('Translate not correct')
    }

  }
}
