function verificaCPFInvalidos(cpf){
    const cpfInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]

    //indexOf me diz se o que eu quero esta no arrai ou nao . ele me retorna a posiçao . se ele nao achar ele me retorna -1
    return cpfInvalidos.indexOf(cpf) === -1 // se for igual a -1 o cpf é verdadeiro
}

function somaNumerosCPF(cpf, totalDigitos, peso){
    let soma = 0


    for(let indice = 1; indice <= totalDigitos; indice++){
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice) //pegando a primeira posicao, tranformando em numero e depois multiplica
    }
    return soma
}

function verificaDigito(cpf, totalDigitos, peso, digitoDeVerificacao){
    const soma = somaNumerosCPF(cpf, totalDigitos, peso)
    const resto = (soma * 10) % 11
    return resto === digitoDeVerificacao
}

function verificaPrimeiroDigito(cpf){
    const peso = 11
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10)) //parseInt transformando em inteiros

    return verificaDigito(
        cpf,
        totalDeDigitosPrimeiraParte,
        peso,
        digitoDeVerificacao
    )
}


function verificaSegundoDigito(cpf){
    const peso = 12
    const totalDeDigitosSegundaParte = 10
    const  digitoDeVerificacao = parseInt(cpf.substring(10, 11)) // a partir do 10 pega o 11

    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificacao
    )
}

function validaCPF(cpf){
    return(
        verificaPrimeiroDigito(cpf) &&  //condicional &&
        verificaSegundoDigito(cpf) &&
        verificaCPFInvalidos(cpf)
    )
}