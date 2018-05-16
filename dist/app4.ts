import { ConcessionarioDAO } from './concessionarioDAO'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'
import { PessoaDao } from './pessoaDAO';

let dao: ConcessionarioDAO = new ConcessionarioDAO()
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa ('', '');

dao2.atualizar(pessoa);