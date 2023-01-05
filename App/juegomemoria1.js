


document.addEventListener('DOMContentLoaded', () => {
  
  spanPlayer.innerHTML = localStorage.getItem('player');
    //card options
    cardArray;
   
    function contarTiempo(){
      tiempoRegresivo = setInterval(()=>{
          mostrarTiempo.innerHTML= `Tiempo restante: ${timer} segundos`;
          timer--;
          clearInterval(tiempoRegresivo);
      }, 1000, timer);
    }
  
  
    cardArray.sort(() => 0.5 - Math.random())
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '../imagenes/scaloneta.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
       
        grid.appendChild(card)
         
       
      }
      
    
    }
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      contarTiempo()
      clickAudio.play()
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../imagenes/scaloneta.jpg')
        cards[optionTwoId].setAttribute('src', '../imagenes/scaloneta.jpg')
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        correctoAudio.play()
        cards[optionOneId].setAttribute('src', '../imagenes/bandera_argentina.jpg')
        cards[optionTwoId].setAttribute('src', '../imagenes/bandera_argentina.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', '../imagenes/scaloneta.jpg')
        cards[optionTwoId].setAttribute('src', '../imagenes/scaloneta.jpg')
        incorrectoAudio.play()
        
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2 ) {
        grid.textContent = '🎇 Felicidades lo haz logrado!🏆🎇'
        
        winAudio.play()
      } else if (timer <= 0) {
        grid.textContent = ' 😔Se termino el tiempo 🕐. Reinicia el juego y vuelve a intentarlo👍'
        loseAudio.play();
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
    
    createBoard()
  })

  

  
 