/* 
Ser autenticavel significa ter o metodo autenticar

ducky type = nao me entereça se ele é um pato , se ele anda como um pato e faz quaqua como um pato entao vou tratar ele como um pato.
*/

export class SistemaAutenticacao{

    static login (autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){ //se tiver o metodo autenticar no objeto ele retorna true se nao é false
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function //verificando se tenho "autenticar dentro de autenticavel" e se 
                                                        //autentivel.autenticar é um indtsncia de uma funcao 
   }

   //in = percorrer dentro 
   // instanceof = verificando se é uma instancia 
}