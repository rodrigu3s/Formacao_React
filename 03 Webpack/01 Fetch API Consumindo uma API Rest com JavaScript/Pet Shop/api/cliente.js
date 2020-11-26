
const listarClientes = ()=>{                //tratando a promise
    return fetch('http://localhost:4000/clientes')

    .then(resposta =>{ 
        return resposta.json()
    })

    .then(json =>{
        return json
    })
}


const cadastrarClientes = (nome, cpf)=>{
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    }) 
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',    //tipo do metodo
        headers: {
            'Content-type': 'application/json'  //cabeçalho , que tipo de dados enviar para o servidor
        } , 
        body: json //enviando dados do cliente, bady recebe dados do cliente
    })
    .then(resp =>{
        return resp.body;
    })
}

const deletaCliente = id=>{
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {  //usou `` para mostrar oq é string e oq é JS
        method: 'DELETE' 
    })
}


const detalhaCliente = id =>{    // essa funçao me retorna uma promice
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'GET'   // me retorna uma promice
    })
    .then(resposta =>{
       return resposta.json() //transformando minha resposta em JSON
    })
}


const editaCliente = (id, cpf, nome)=>{
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    }) 
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',    //tipo do metodo
        headers: {
            'Content-type': 'application/json'  //cabeçalho , que tipo de dados enviar para o servidor
        } , 
        body: json //enviando dados do cliente, bady recebe dados do cliente
    })
}
