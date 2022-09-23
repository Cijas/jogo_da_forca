//criando biblioteca
let biblioteca = ["TOALHA","RESTAURANTE","CHURRASCO","CANJICA","PLANILHA","RELOGIO","CASA","PRAIA",
"CACHORRO", "QUARTO","CURSO","MONITOR","BRINQUEDO","AMORA","BANANA","APICE","CONTEXTO", "FORCA"];
const letrasErradas = [];
const letrasCorretas = [];

let tabuleiro = document.getElementById('forca').getContext('2d');

let segredo = "";
let input = document.querySelector('.segredo');

var jogando = 0;

let teclaPressionada = "";
var btnInicia = document.getElementById('novo-jogo');
var blocoErradas = document.getElementById('letras-erradas');
var btnAddWord = document.getElementById('nova-palavra');
var btnDesistir = document.getElementById('desistir');
var tutorial = document.getElementById('tutorial');
var letraRepetida = document.getElementById('aviso-palavra-repetida');

letraRepetida.style.display = "none";
blocoErradas.style.display = "none";
tutorial.style.display = "none";
btnDesistir.style.display = "none";


function sorteiaSegredo () {
    let palavra = biblioteca[Math.floor(Math.random () * biblioteca.length)];
    segredo = palavra;
    console.log(segredo);
}

function iniciarJogo() {
    btnInicia.style.display = "none";
    btnAddWord.style.display = "none";
    blocoErradas.style.display = "inline-block";
    btnDesistir.style.display = "inline-block";
    tutorial.style.display = "inline-block";
    jogando = 1;
    sorteiaSegredo();
    insCanvas();
    desenharLinhas();
    desenharForca();
    desenharCorpo();
}

//Adicionando palavra
function addWord() {
    if (jogando == 0) {
    let palavraAdc = prompt("Deseja adicionar alguma palavra? (Sem acentos ou números).").toUpperCase();
    biblioteca.push(palavraAdc);
    } else {
      alert ("Não é possível adicionar palavras enquanto está jogando");
    }
}

//Botão de desistir
function desistir() {
 location.reload();
}

//Keydown
  document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 - 90 (intervalo)
    if (jogando==1) {
      if (isLetra(codigo)) {
        const letra = evento.key.toUpperCase();
        if (letrasErradas.includes(letra)) {
          mostrarAvisoLetraRepetida();
        } else {
          if (segredo.includes(letra)) {
            for (let i = 0; i < segredo.length; i++) {
              if (segredo[i] === letra) {
                letrasCorretas.push(letra);
                escreverLetrasCertas(i);
              }
            }
          } else {
            letrasErradas.push(letra);
          }
        }
        atualizarJogo();
        console.log(letra);
      }
    }
  });

function atualizarJogo() {
  mostrarLetrasErradas();
  desenharCorpo();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras erradas</h3>";
  letrasErradas.forEach((letra) => {
  div.innerHTML += `<span>${letra}</span>`;
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");

  if (letrasErradas.length === 6) {
    mensagem = "Fim de jogo! Você perdeu! Aperte desistir para um novo jogo";
    jogando = 0;
  }

  if (segredo.length === letrasCorretas.length) {
    mensagem = "Parabéns! Você ganhou! Aperte desistir para um novo jogo";
    jogando = 0;
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharCorpo() {
  for (let i = 0; i < letrasErradas.length; i++) {
    if (i==0) {
      cabeca();
    }

    if (i==1) {
      corpo();
    }

    if (i==2) {
      bracoD();
    }

    if (i==3) {
      bracoE();
    }

    if (i==4) {
      pernaE();
    }

    if (i==5) {
      pernaD();
    }
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

