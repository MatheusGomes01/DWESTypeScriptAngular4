import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta : Oferta

  //private route: ActivatedRoute

  constructor(
    private route: ActivatedRoute,
     private ofertasService : OfertasService
     ){ 
    //this.route = route
  }

  ngOnInit() {
    // console.log('id',this.route.snapshot.params['id'])
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta )=> {
      this.oferta = oferta
      //console.log(this.oferta)
    })
    /*this.route.params.subscribe((parametro: any) => {
      console.log(parametro.id)*/
  /*})*/
  }

}
