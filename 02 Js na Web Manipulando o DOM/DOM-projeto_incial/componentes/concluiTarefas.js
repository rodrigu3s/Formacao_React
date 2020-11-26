
//criando componete botao
const BotaoConclui = () =>{     //metodo que cria o botao

    const botaoConclui = document.createElement('button') //criando o elemento button

    botaoConclui.classList.add('check-button') //adcionando uma class no botao
    
    botaoConclui.innerText = 'concluir'//propriedade que serve p/ representar o conteudo de texto que vai ser renderzado no botao

    //o evento do Click    //escutando o evento de click , caso alguém click isso que vai acontecer
    botaoConclui.addEventListener('click', concluirTarefa ) // primeiro parametro o click, depois o metodo que quero que execute após o click 

    return botaoConclui;
}


const concluirTarefa = (evento) =>{  //o parametro evento tra informações de onde estou cliacando  que é o botao
    const botaoConclui = evento.target  // target me diz qual o alvo do evento, ou seja quando clicar quero saber onde cliquei

    const tarefaCompleta = botaoConclui.parentElement //parentElement pega o pai do elemento que cliquei , nesse caso o pai do btao é o  <li>


    tarefaCompleta.classList.toggle('done') //o metodo toggle executa a class done do css , toggle me retorna true or false
}

export default BotaoConclui;