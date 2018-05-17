//import { ConcessionarioDAO } from './concessionarioDAO'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'
//import { PessoaDao } from './pessoaDAO';
import { DAO } from './DAO';


//let dao: ConcessionarioDAO = new ConcessionarioDAO()
let concessionaria = new Concessionaria('', []);
//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa ('', '');

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();

dao3.inserir(concessionaria)
dao4.remover(5)