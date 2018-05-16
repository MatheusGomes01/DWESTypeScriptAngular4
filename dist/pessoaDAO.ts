import { DAOInterface } from './DAOInterface'
import Pessoa from './pessoa'

export class PessoaDao implements DAOInterface{

    nomeTabela: string = 'tb_pessoa'

    inserir(object: any): boolean{
        console.log('lógica de insert')
        return true 
    }
    atualizar(object: any): boolean{
        console.log('lcógica update')
        return true 
    }
    remover(id: number): any{
        console.log('lógica delete')
        return new Pessoa('', '') 
    }
    selecionar(id: number): any{
        console.log('lógica select')
        return new Pessoa('', '') 
    }
    selecionarTodos(): [any]{
        console.log('lógica getAll')
        return [new Pessoa('', '')] 
    }
}