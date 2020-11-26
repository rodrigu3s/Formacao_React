import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo" , 11122233344);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233344;

const cliente2 = new Cliente("Alice", 99988877766 );
// cliente2.nome = "Alice";
// cliente2.cpf = 99988877766;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001 );
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(cliente2, 102);
// conta2.cliente = cliente2;
// conta2.agencia = 102;


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo)
console.log(conta2)
console.log("\nNúmeros de contas Criadas =  ", ContaCorrente.numeroDeContas);
