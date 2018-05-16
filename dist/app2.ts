
import Carro from './carro'
import Pessoa from './pessoa'
import Concessionaria from './concessionaria'
/* --- criar carros --- */

let carroA = new Carro('Dodger Journey', 4)
let carroB = new Carro('Lamborguini', 4)
let carroC = new Carro('Mustang', 4)


/* --- montar lista de carros da concessionaria ---*/

let ListaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Laranja da China', ListaDeCarros)

/*--- exibir lista de carro --- */

//console.log(concessionaria.mostrarListaDeCarros())

/*-- comprar o carro */

let cliente = new Pessoa('Matheus', 'Lamborguini')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //comprar
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())