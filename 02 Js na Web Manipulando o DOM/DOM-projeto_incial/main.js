import BotaoConclui from './componentes/concluiTarefas.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    const criarTabela = (evento) => {

    evento.preventDefault()  //chamo o metodo que previne comportamento padrao

    const lista = document.querySelector("[data-list]")  // pegando a UL do html e atribuindo a variavel lista
    const input = document.querySelector('[data-form-input]')  //lincando html com a cont input do JS
    const valor = input.value             // valor recebe o que foi passado pelo input


    

    const tarefa = document.createElement('li') // criando elemento <li>
    tarefa.classList.add('task') // add class ao li
    const conteudo = `<p class="content">${valor}</p>`// cliando um teplete strings, interpolando html com JS
    

    tarefa.innerHTML = conteudo // terefa recebe o valor passado por input

    tarefa.appendChild(BotaoConclui()) // colocando o botao dentro da <li>
    tarefa.appendChild(BotaoDeleta()) // colocanto o botao na <li>
    lista.appendChild(tarefa)  // metofdo , que anexa um elemento dentro do outro, ou seja criando uma li dentro de uma ul 
    input.value = " " //limpando o input
}

const novaTarefa = document.querySelector('[data-form-button]') // Utilizamos data-attributes no html da nossa aplicação para separar responsabilidades entre Javascript e CSS

//o evento do Click    //escutando o evento de click , caso alguém click isso que vai acontecer
novaTarefa.addEventListener('click', criarTabela) //primeiro parametro é o click e o segundo é a função que quero que ele execute



























//COMENTARIO SOBRE O ASSUNTO

/*Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. 
Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado 
no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

insertBefore(pai, filho): Coloca um nó antes do outro.
replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
removeChild(elemento): Remove um nó da árvore.*/