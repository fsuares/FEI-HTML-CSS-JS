let altura = parseFloat(prompt('Digite a altura: '))
let peso = parseFloat(prompt('Digite o Peso: '))

if (altura > 1.70) {
    if (peso <= 60){
        console.log('C')
    }
    else if (60 < peso < 91){
        console.log('F')
    }
    else if (peso > 90){
        console.log('I')
    }
}
else if (altura < 1.20) {
    if (peso <= 60){
        console.log('A')
    }
    else if (60 < peso < 91){
        console.log('D')
    }
    else if (peso > 90){
        console.log('G')
    }
}
else if (1.19 < altura < 1.71) {
    if (peso <= 60){
        console.log('B')
    }
    else if (60 < peso < 91){
        console.log('E')
    }
    else if (peso > 90){
        console.log('H')
    }
}
else {
    console.log('Error!')
}