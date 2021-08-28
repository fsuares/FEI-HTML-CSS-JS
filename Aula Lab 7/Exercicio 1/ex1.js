let num_aleatorio = Math.floor(Math.random()*101);

//para fins de teste o numero é impresso no console
console.log(num_aleatorio)

function verified() {
    let num = document.getElementById('num').value;

    if (num > num_aleatorio) {
        document.getElementById('resultado').innerHTML = "Numero Grande!";
        document.getElementById('resultado').style.background = 'blue';
    }
    else if (num < num_aleatorio) {
        document.getElementById('resultado').innerHTML = "Numero Pequeno!";
        document.getElementById('resultado').style.background = 'red';
    }
    else {
        document.getElementById('resultado').innerHTML = "Show!";
        document.getElementById('resultado').style.background = 'green';
    }

}

