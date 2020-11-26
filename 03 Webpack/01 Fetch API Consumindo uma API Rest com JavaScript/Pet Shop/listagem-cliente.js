const removeCliente = id =>{
    if(confirm("Deseja deletar o cliente ?")){ //confirm é uma função
        deletaCliente(id)
    }
}


const corpoTabela = document.querySelector("[data-conteudo-tabela]")  // linkando a tabela com a variavel

 
const exibeCliente = (cpf, nome, id )=>{
    const linha = document.createElement('tr')


    const conteudoLinha = 
    `<td>${cpf}</td>
    <td>${nome}</td>

    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>

    <a href="edita-clientes.html?id=${id}">
        <button type="button" class="btn btn-info">Editar</button>
    </a>
    `

    linha.innerHTML = conteudoLinha //adicionando informação ao html, adiciona o conteudo a <tr>

    return linha
}

listarClientes().then( exibe =>{
    exibe.forEach(indice =>{
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})
