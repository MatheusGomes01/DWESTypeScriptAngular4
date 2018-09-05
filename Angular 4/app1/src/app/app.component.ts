import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public Encerramento: string 
  
  
  public encerrarJogo(tipo: string): void {
	
    this.jogoEmAndamento = false
    this.Encerramento = tipo
  }

  public reiniciarJogo(): void{
    this.jogoEmAndamento = true
    this.Encerramento = undefined
  }
}
