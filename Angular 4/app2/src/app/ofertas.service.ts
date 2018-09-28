import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import  'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService{

    private url_api = 'http://localhost:3000/ofertas'
    constructor(private  http: Http){

    }

    getOfertas(): Promise<Oferta[]>{
        
        //efetuar uma requisição http
        return this.http.get(`${this.url_api}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retornar uma promisse Oferta[]
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${this.url_api}?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta:any) => {
            return resposta.json()[0] /*or.shift()*/
        })
    }
}