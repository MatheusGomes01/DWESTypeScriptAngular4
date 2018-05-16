import { DAOInterface } from './DAOInterface'
import Concessionaria from './concessionaria'

export class ConcessionarioDAO implements DAOInterface{

    nomeTabela: string = 'tb_concessionaria'

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
        return new Concessionaria('', []) 
    }
    selecionar(id: number): any{
        console.log('lógica select')
        return new Concessionaria('', []) 
    }
    selecionarTodos(): [any]{
        console.log('lógica getAll')
        return [new Concessionaria('', [])] 
    }
}