//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(){
    n1 = 10
    n2 = 20
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

soma()

//========================================================================================

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function retornaBooleano(){
    n1 = 5
    n2 = 10
    console.log(`${n1} >= ${n2} = ${n1 >= n2}`)
}

retornaBooleano()

//========================================================================================

//c) Uma função que receba um número e imprima se ele é par ou não

function numeroPar(){
    numero = 10
    if(numero% 2 === 0){
        console.log("O número é par") 
    }else{
        console.log("O número é impar") 
    }
    
}

numeroPar()

//========================================================================================

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function retornaString(){
    mensagem = "Olá, Mundo".toUpperCase()
    console.log(`A frase ${mensagem} possui ${mensagem.length} caracteres`)
}

retornaString()
