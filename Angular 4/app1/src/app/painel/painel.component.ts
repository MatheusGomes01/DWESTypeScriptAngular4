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
  resposta: string = ''

  public rodada:number = 0
  public rodadaFrase: frase 

  public progress: number = 0


  constructor() { 
    this.AtualizaRodada()
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

    //progresso
    this.progress = this.progress + (100 / this.frases.length)

    console.log(this.progress)

    //atualiza o objeto de frase
    this.AtualizaRodada()
    

    }else {
      alert('Translate not correct')
    }

  }

  public AtualizaRodada(): void{

    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    //limpa resposta
    this.resposta = ''
  }
}
