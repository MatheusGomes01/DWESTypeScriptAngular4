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
  constructor() { console.log(this.frases)}

  ngOnInit() {
  }


  //se não colocar o visualizador de visibilidade o TS lê como public
  public atualizaResposta():void {
    console.log('teste')
  }

}
