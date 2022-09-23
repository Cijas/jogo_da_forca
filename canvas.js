function insCanvas () {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";


    //Manipular desenho
    tabuleiro.fillRect(0,0, 1200, 600);
    tabuleiro.beginPath();
    tabuleiro.moveTo(800,500);
    tabuleiro.lineTo(550,500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 580/segredo.length;

    for (let i=0;i<segredo.length;i++) {
        //inteiração no looping
        tabuleiro.moveTo(430+(largura*i), 580);
        tabuleiro.lineTo(470+(largura*i), 580);
        
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetrasCertas(index) {
        tabuleiro.font = "bold 35px Inter";
        tabuleiro.lineCap = "round";
        tabuleiro.fillStyle = "#0A3871";
        tabuleiro.lineWidth = 6;

        let largura = 580 / segredo.length;
        tabuleiro.fillText(segredo[index], 440 + (largura * index), 570);
}

function limparLetrasCertas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.fillRect(0,0, 1200, 600);    
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharForca() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(600,500);
    tabuleiro.lineTo(600,150);
    tabuleiro.lineTo(720,150);
    tabuleiro.lineTo(720,200);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function cabeca() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 225);
    tabuleiro.arc(720,225,25,0,2*Math.PI);
    tabuleiro.stroke();
    tabuleiro.closePath();

}

function corpo() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 250);
    tabuleiro.lineTo(720, 350);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function bracoE() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 250);
    tabuleiro.lineTo(740, 300);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function bracoD() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 250);
    tabuleiro.lineTo(700, 300);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function pernaE() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 350);
    tabuleiro.lineTo(740, 400);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function pernaD() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.beginPath();
    tabuleiro.moveTo(720, 350);
    tabuleiro.lineTo(700, 400);
    tabuleiro.stroke();
    tabuleiro.closePath();
}