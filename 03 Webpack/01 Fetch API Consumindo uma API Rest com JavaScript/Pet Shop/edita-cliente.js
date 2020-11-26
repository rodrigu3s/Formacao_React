const pegaURL = new URL(window.location) //mostra o endereço da pagina

const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then( dados =>{
    inputCPF.value = dados[0].cpf  //passando pra api, devolvento como primeiro eleto do array
    inputNome.value = dados[0].nome
})


const formEdicao = document.querySelector('[data-form]')


const mensagemSucesso = (mensagem)=>{
    const linha = document.createElement('tr')

    const conteudoLinha = 
    `<div class="alert alert-success" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudoLinha 

    return linha

}


const mensagemErro = (mensagem)=>{
    const linha = document.createElement('tr')

    const conteudoLinha = 
    `<div class="alert alert-warning" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudoLinha 

    return linha

}




formEdicao.addEventListener('submit', event =>{
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        alert("Esse cpf não existe")
        return 
    }

    editaCliente(id, inputCPF.value, inputNome.value).then(resposta =>{
        if(resposta.status === 200){
            formEdicao.appendChild(mensagemSucesso(
                'Cliente editado com sucesso !'
            ))
        }
        else{
            formEdicao.appendChild(mensagemErro(
                'Erro na edição do cliente'
            ))
        }
    })
})