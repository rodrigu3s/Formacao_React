//Destructuring ou Desestruturação.

//Ultilizando com Functions

const pessoa = {
    nome: 'Julia',
    sobrenome: 'Maria',
    idade: 25

}

function imprimeDados(dados){
    console.log(dados);
}

imprimeDados(pessoa);   // chamando a funcao e passando o objeto pessoa com parametro


//Expecificando quais dados do objeto pessoa eu quero
function imprimeDados2(dados){
    const {nome, idade} = dados;
    console.log(nome, idade);
}

imprimeDados2(pessoa);   // chamando a funcao e passando o objeto pessoa com parametro


//Outra forma de fazer o exempo acima
function imprimeDados3({nome, idade}){
    console.log(nome, idade);
}

imprimeDados3(pessoa); // chamando a funcao e passando o objeto pessoa com parametro