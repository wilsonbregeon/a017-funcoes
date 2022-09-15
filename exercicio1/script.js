//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function retornaNome(){
//     nome = "Wilson"
//     console.log(`Olá, ${nome}`)
// }
// retornaNome()

//========================================================================================

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function retornaTabuada(){
//     for(let i = 1; i <= 10; i++){

//         console.log(`6 x ${i} = ${i * 6}`)
//     }
// }

// retornaTabuada()

//========================================================================================

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


//  const retornaNome = (string) => {
//      string = prompt("Digite seu nome")
//      console.log(`Olá, ${string}!`)
//  }

//  retornaNome()

const retornaTabuada = (n1 = 6) => {
    for(let n2 = 1; n2 <= 10; n2++){
        console.log(`${n1} x ${n2} = ${n1 * n2}`)
    }
}

retornaTabuada()
