import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    //Atributos publico
    static numeroDeContas = 0 //tem que deixar statico p/ ele somar todas as conta , se nao cada conta so contabiliza sua instancia
    

    constructor(cliente, agencia){
        super(0 ,cliente, agencia ); //Pra fazer a referencia desse contrutor com o da class mãe que é Conta;
        ContaCorrente.numeroDeContas += 1;  //chama contaCorrente pq ele busca esse numero na class completa
    }

    sacar(valor){     //Sobreescrevendo o Metodo Sacar da Class conta. 
        let taxa = 1.1;
        return this._sacar(valor, taxa);  //retorna o metodo protegido Sacar da class conta
    }


   
}