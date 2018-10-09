import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { url_api } from './app.api'

import  'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService{

    constructor(private  http: Http){

    }

    getOfertas(): Promise<Oferta[]>{
        
        //efetuar uma requisição http
        return this.http.get(`${url_api}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retornar uma promisse Oferta[]
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${url_api}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${url_api}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta:any) => {
            return resposta.json()[0] /*or.shift()*/
        })
    }

    getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${url_api}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            //console.log(resposta.json()[0].descricao)
            return resposta.json()[0].descricao
        })
    }

    getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${url_api}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            //console.log(resposta.json()[0].descricao)
            return resposta.json()[0].descricao
        })
    }
}