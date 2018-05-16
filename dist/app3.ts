import Carro from './carro'
import Moto from './moto'
import Concessionaria from './concessionaria'

let carro = new Carro('Lamborguini', 2);
carro.acelerar()
carro.acelerar()



let moto = new Moto();
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('',[])

console.log(moto)
console.log(carro)
console.log(concessionaria.fornerHorarioDeFuncionamento())