let temporizador = false;
let timerInicial = 15;
let timer = 15;
let mostrarTiempo= document.getElementById('restante');
let mostrarPuntaje= document.getElementById('puntaje');
let winAudio= new Audio('../sound/gol-gol-gol.mp3');
let loseAudio= new Audio('../sound/perdedor.mp3');
let clickAudio= new Audio('../sound/click.mp3');
let correctoAudio= new Audio('../sound/correcto.mp3');
let incorrectoAudio= new Audio('../sound/incorrecto.mp3');
const spanPlayer = document.querySelector('.player');



const cardArray = [
  {
    name: 'DePaul',
    img:  '../imagenes/DePaul.jpg'
  },
  {
    name: 'Dibu1',
    img: '../imagenes/dibu1.jpg'
  },
  {
    name: 'DiMaria2',
    img: '../imagenes/DiMaria2.jpg'
  },
  {
    name: 'Enzo1',
    img: '../imagenes/Enzo1.jpg'
  },
  {
    name: 'Julian',
    img: '../imagenes/Julian.jpg'
  },
  {
    name: 'Messi1',
    img: '../imagenes/Messi1.jpg'
  },
  {
    name: 'DePaul',
    img:  '../imagenes/DePaul.jpg'
  },
  {
    name: 'Dibu1',
    img: '../imagenes/dibu1.jpg'
  },
  {
    name: 'DiMaria2',
    img: '../imagenes/DiMaria2.jpg'
  },
  {
    name: 'Enzo1',
    img: '../imagenes/Enzo1.jpg'
  },
  {
    name: 'Julian',
    img: '../imagenes/Julian.jpg'
  },
  {
    name: 'Messi1',
    img: '../imagenes/Messi1.jpg'
  },

];
 const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []