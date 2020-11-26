//Destructuring ou Desestruturação.

// é uma sitaxe utilizada para extrair datos tanto de arrays como de objetos


const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];

console.log(numeros);  // um array de array


const numeros2 = [...numerosPares, ...numerosImpares]; // os tres pontos é sitax do Destructuring, serve par abrir o array e 
console.log(numeros2);                                 // me retornar como se fosse um unico array  


// Outro Exemplo

const num1 = 2;
const num2 = 4;                  // foi criado 2 variaveis e depois foi impresso seus valores no console.

console.log(num1, num2);


// Mesmo exemplo de cima, porem utilizando os conceitos do Destructuring.
const [num3, num4] = [6, 8];  //Ele pega o primeiro numero e atribui a varivel num3 , e o segundo numero é atribuido a num4.
console.log(num3, num4);


// E se eu quiser atribuir varios valores a uma unica variavel.
const [num5, num6, ...outrosNumeros] = [6, 8 , 1, 2, 3];  // com os 3 pontos antes da variavel ela abre o vetor e me retorna 
console.log(num5, num6, outrosNumeros);                    // todos valores apartir do numero 1.