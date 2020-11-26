const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener("submit", event =>{
    event.preventDefault(); //previnir o comportamento padrao

    const nome = event.target.querySelector('[data-nome]').value//dentro do event eu tenho um alvo, e quem é esse alvo? eu passo pelo quere selector
    const cpf = event.target.querySelector('[data-cpf]').value 

    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf)
    }else{
        alert("O CPF não é Válido")
    }
    
})