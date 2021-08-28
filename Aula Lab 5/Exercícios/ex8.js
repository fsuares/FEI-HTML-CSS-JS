let maiorNumero = 0
let menorNumero = 999
i = 0
par = 0
impar = 0
soma = parseInt(0)

while(true) {
    numero = (prompt('Digite um Nº: '))
    if (String(numero) === 'sair'){
        console.log('A soma dos numeros é: ', soma)
        console.log('A quantidade de numeros digitados é: ' +i)
        console.log('O maior numero é: ' +maiorNumero)
        console.log('O menor numero é: ' +menorNumero)
        console.log('A media dos numeros pares é: ' +par/i.toFixed(2))
        console.log('A porcentagem dos números ímpares é: ' +(100/i)*impar.toFixed(2),'%')
        break
    }
    numero = (parseFloat(numero))
    if (parseFloat(numero)%2===0){
        par += 1
    }
    if (parseFloat(numero)%2!==0) {
        impar += 1
    }
    if (parseFloat(numero) > maiorNumero){
        maiorNumero = numero
    }
    if (parseFloat(numero) < menorNumero){
        menorNumero = numero
    }
    soma = soma + numero
    i ++

}
