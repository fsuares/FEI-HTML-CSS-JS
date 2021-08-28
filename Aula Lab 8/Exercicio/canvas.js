var canvas = document.getElementById('myCanvas')
var ctx =  canvas.getContext('2d')

function desenharRetangulos(color, x, y, w, h){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function desenharLinhas(color, x1, x2, y1, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function desenharArcos(borda, x, y, raio, anguloINI, anguloFIM) {
    ctx.beginPath();
    ctx.arc(x,y,raio,anguloINI*Math.PI,anguloFIM*Math.PI)
    ctx.strokeStyle = borda;
    ctx.stroke();
}

function desenharCirculos(borda, preenchimento=0, x, y, raio, anguloINI, anguloFIM) {
    ctx.strokeStyle = borda;
    ctx.fillStyle = preenchimento;
    ctx.beginPath();
    ctx.arc(x,y,raio,anguloINI*Math.PI,anguloFIM*Math.PI)
    ctx.fill();
    ctx.stroke();
}

function escrever(color,font, x, y, texto) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(texto, x, y);
}
//palavras
escrever('black','20px Arial', 115, 50, 'Canvas');

//-------------------- --------------------- > Retangulos
desenharRetangulos('blue',0,0,50,50);
desenharRetangulos('red',250,0,50,50);
desenharRetangulos('yellow',0,270,60,30);
desenharRetangulos('yellow',0,240,30,30);
desenharRetangulos('black',270,240,30,60);
desenharRetangulos('black',240,270,60,30);
desenharRetangulos('aqua',0,120,30,60);
desenharRetangulos('red',110,150,40,40);
desenharRetangulos('aqua',270,135,30,30);

// -------------------------- ----------------------- >linhas
desenharLinhas('green', 0, 300, 150, 150);
desenharLinhas('black', 150, 150, 150, 300);
desenharLinhas('blue', 150, 0, 150, 0);
desenharLinhas('red', 150, 300, 150, 0);


//----------------------------- --------------------- > semi circulos
desenharArcos('green',150,150,60,1,2);
desenharArcos('green',150,150,80,1,1.25);
desenharArcos('green',150,150,80,1.75,0.004);
desenharArcos('green',150,300,60,1.5,0.5);
desenharArcos('green',150,300,80,1,1.5);



//------------------------------- -----------------------> circulos completos
desenharCirculos('blue','cyan',150,115,15,0,2);
desenharCirculos('green','cyan',150,300,30,0,2);
desenharCirculos('green','yellow',70,225,15,0,2);
desenharCirculos('green','yellow',220,225,15,0,2);

