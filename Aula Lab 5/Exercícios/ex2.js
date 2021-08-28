let n1 = parseFloat(prompt('Digite a nota de Lab: '))
let n2 = parseFloat(prompt('Digite a nota da Avaliação Semestral: '))
let n3 = parseFloat(prompt('Digite a nota do Exame Final: '))
media_Ponderada = (2*n1 + 3*n2 + 5*n3)/10

if (media_Ponderada > 8 && media_Ponderada <= 10) {
    conceito = 'A'
}
else if (media_Ponderada > 7 && media_Ponderada <= 8) {
    conceito = 'B'
}
else if (media_Ponderada > 6 && media_Ponderada <= 7) {
    conceito = 'C'
}
else if (media_Ponderada > 5 && media_Ponderada <= 6) {
    conceito = 'D'
}
else if (media_Ponderada > 0 && media_Ponderada <= 5) {
    conceito = 'E'
}

console.log('Media Ponderada = ', media_Ponderada)
console.log('Conceito: ', conceito)