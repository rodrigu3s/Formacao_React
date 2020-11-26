 //Destructuring ou Desestruturação.

//Ultilizando com Objetos

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 81992222321
}

console.log(pessoa, pessoaComTelefone);


//Outro Exemplo

const n = pessoa.nome;  //atribui o valor de pessoa.nome a uma constante e impremi no cosole.
console.log(n);

// outra forma de fazer o exemplo acima.
const {nome} = pessoa;
console.log(nome);