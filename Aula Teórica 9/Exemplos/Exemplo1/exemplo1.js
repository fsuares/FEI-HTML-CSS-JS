let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let tecla = 0;

var quadrilatero = {
    x: 0,
    y: 0,
    altura: 30,
    largura: 30,
    cor: 'red'
}

document.addEventListener('keydown', function (evento){
    tecla = evento.keyCode;
    //console.log(tecla)
})

function desenharQuadrilatero(){
    /*apaga o rastro*/
    ctx.clearRect(0, 0, canvas.height, canvas.width)

    ctx.fillStyle = quadrilatero.cor
    ctx.fillRect(quadrilatero.x, quadrilatero.y, quadrilatero.altura, quadrilatero.largura)

    if (tecla === 37){
        if (quadrilatero.x > 0){
        quadrilatero.x--
        }
    }

    else if (tecla === 38){
        if (quadrilatero.y > 0) {
            quadrilatero.y--
        }
    }

    else if (tecla === 39){
        if(quadrilatero.x < canvas.width - quadrilatero.largura){
            quadrilatero.x++
        }
    }

    else if (tecla === 40){
        if(quadrilatero.y < canvas.height - quadrilatero.altura) {
            quadrilatero.y++
        }
    }


    /*setTimeout(desenharQuadrilatero, 0.01)*/
    requestAnimationFrame(desenharQuadrilatero)
}

desenharQuadrilatero();