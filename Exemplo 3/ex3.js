function soma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = parseFloat(num1) + parseFloat(num2);

    resultado = Math.round((resultado * 100)/100)

    document.getElementById('resultado').innerHTML = resultado;
}