//Criando Componente

const BotaoDeleta = ()=>{
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'Deletar' //dando nome ao botao

    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta

}


const deletarTarefa = (evento)=>{
    const botaoDeleta = evento.target  //pegadnoo alvo do butao. onde ele vai clicar

    const tarefaCompleta = botaoDeleta.parentElement //pegando o elemento pai que é a <li>, pq vou excluir a <li> inteira

    tarefaCompleta.remove() //metodo que remove elementos da minha arvore do DOM

    return botaoDeleta
}

export default BotaoDeleta;