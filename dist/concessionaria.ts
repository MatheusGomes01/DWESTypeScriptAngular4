import { ConcessionariaInferface} from './concessionariainterface'
import Carro from './carro'


export default class Concessionaria implements ConcessionariaInferface{
    private endereco: string
    private ListaDeCarros: Array<Carro>

    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.ListaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.ListaDeCarros 
    }
    public fornerHorarioDeFuncionamento(): string {
        return 'De segunda a sexta das 08:00 as 18:00 e sabado das 08:00 as 12:00'
    }
}