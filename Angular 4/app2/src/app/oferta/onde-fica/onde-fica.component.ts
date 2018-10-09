import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {

    //console.log(this.route.parent.snapshot.params['id'])
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao: any) => {
      //console.log(resposta)
      this.ondeFica = descricao
    })
  }

}
