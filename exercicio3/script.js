//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function operacao(){
    n1 = Number(prompt("Digite um número"))
    n2 = Number(prompt("Digite outro número"))
    console.log(`${n1} + ${n2} = ${n1 + n2}; \n${n1} - ${n2} = ${n1 - n2}; \n${n1} x ${n2} = ${n1 * n2}; \n${n1} / ${n2} = ${n1 / n2}`)
}

operacao()