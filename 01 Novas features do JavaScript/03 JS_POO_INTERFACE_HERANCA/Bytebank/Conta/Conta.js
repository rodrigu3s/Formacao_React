//Class Abstrata
// Não foi feita para ser instanciada, foi feita para ser herdada.

export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){  // se o o contrutor for ingual a uma Conta , lançar esse Error
            throw new Error("Você não deveria instanciar um objeto do tipo conta"); //a class Conta não foi feita p/ ser instaciada
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    //Metodo Abstrato
    sacar(valor){         //como padrao sacar me retorna nada , para obrigar o dev a passar a taxa direto na classa da CC,CP,CS
                        // é um metodo abstrato, só serve para ser sobreescrito, ja que toda conta precisa de uma taxa.
        throw new Error("O metodo sacar da conta é abstrato")               
    }

    _sacar(valor, taxa){                     //metodo privado/ Protegido 
        const valorSacado = taxa * valor;    // utilizado na contacorrente
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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