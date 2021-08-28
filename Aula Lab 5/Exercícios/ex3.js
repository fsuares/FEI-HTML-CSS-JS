let i = parseInt(prompt('I = '))
let a = parseFloat(prompt('A = '))
let b = parseFloat(prompt('B = '))
let c = parseFloat(prompt('C = '))

if (i === 3) {
    if (a > b && a > c) {
        maior = a
        outra1 = b
        outra2 = c
    }
    else if (c > b && c > a) {
        maior = c
        outra1 = a
        outra2 = b
    }
    else if (b > a && b > c) {
        maior = b
        outra1 = a
        outra2 = c
    }
    console.log(outra1, '', maior, '', outra2)
}

else if (i === 1) {
    if (a > b && a > c && b > c) {
        maior = a
        meio = b
        menor = c
    }
    else if (a > b && a > c && c > b){
        maior = a
        meio = c
        menor = b
    }
    else if (c > b && c > a && a > b){
        maior = c
        meio = a
        menor = b
    }
    else if (c > b && c > a && b > a){
        maior = c
        meio = b
        menor = a
    }
    else if (b > a && b > c && a > c){
        maior = b
        meio = a
        menor = c
    }
    else if (b > a && b > c && c > a) {
    maior = b
    meio = c
    menor = a
    }
    console.log(menor, '', meio, '', maior)
}

else if (i === 2) {
    if (a > b && a > c && b > c){
        maior = c
        meio = b
        menor = a
    }
    else if (a > b && a > c && c > b){
    maior = b
    meio = c
    menor = a
    }
    else if(c > b && c > a && a > b){
    maior = b
    meio = a
    menor = c
    }
    else if (c > b && c > a && b > a){
    maior = a
    meio = b
    menor = c
    }
    else if (b > a && b > c && a > c) {
    maior = c
    meio = a
    menor = b
    }
    else if (b > a && b > c && c > a) {
        maior = a
        meio = c
        menor = b
    }
    console.log(menor,'', meio,'', maior)
}


