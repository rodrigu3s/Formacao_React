import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    //Atributos publico
    static numeroDeContas = 0 //tem que deixar statico p/ ele somar todas as conta , se nao cada conta so contabiliza sua instancia
    agencia;

    //Atributos Privados
    _cliente;   // esse atributo vai receber os valores da class cliente
    _saldo = 0 ;  // usa-se o _ para identifica que o atributo é privado.


    get cliente(){
        return this._cliente;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){  //intanceof = igual a instancia. ou seja se novovalor for igual a intancia da class cliente
            this._cliente = novoValor;
        } 
    }
    
    get saldo(){
        return this._saldo;
    }


    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;  //chama contaCorrente pq ele busca esse numero na class completa
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){  //fazendo uma condional com a opção que nao quero para o retorno ser nada 
            return;
        }
        this._saldo += valor;  // se for maior que zero executa essa parte . forma de deixar o código mais legivel.
    }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}