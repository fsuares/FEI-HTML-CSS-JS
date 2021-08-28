function calculo() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado;
    if (num1 < 0 || num2 < 0) {
        resultado = parseFloat(num1) + parseFloat(num2);
    }

    else {
        resultado = num1 * num2;
    }

    document.getElementById('resultado').innerHTML = resultado;
}