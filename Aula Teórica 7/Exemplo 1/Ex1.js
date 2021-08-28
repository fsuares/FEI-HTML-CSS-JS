let nome = prompt('Qual o seu nome: ')
let idade = prompt('Qual a sua idade: ')
let ano_atual = prompt('Digite op ano atual: ')

let nascimento = ano_atual - idade;

document.getElementById('nome').innerHTML = '<b>O Seu nome é</b> ' + nome;
document.getElementById('idade').innerHTML = 'Você nasceu no ano de ' + nascimento;
