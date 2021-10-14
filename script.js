'use strict';

const numberGuess = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = numberGuess;
let scoree = 20;
let highscore = 0;

const myMessage = message => {
  document.querySelector('.message').textContent = message;
};

const myNumber = number => {
  document.querySelector('.number').textContent = number;
};
console.log(numberGuess);

let cheking = document.querySelector('.check');
cheking.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //Si no es un numero
  if (!guess) {
    myMessage('⛔ No es un numero!');
    //Si el numero es el correcto. -----------------------------------------------------------------------
  } else if (guess === numberGuess) {
    myMessage(' 😎 Acertaste! Felicitaciones ganador');
    document.querySelector('body').style.backgroundColor = '#60b347';
    myNumber(numberGuess);
    document.querySelector('.number').style.width = '20rem';
    if (scoree > highscore) {
      highscore = scoree;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numberGuess) {
    if (scoree > 1) {
      myMessage(
        guess > numberGuess
          ? '😒 Muy alto es mas abajo'
          : ' ☝️ Muy bajo es mas arriba'
      );

      scoree--;
      document.querySelector('.score').textContent = scoree;
    } else {
      myMessage('🤡 Game over ');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF2626';
      myNumber(numberGuess);
      document.querySelector('.number').style.width = '20rem';
    }
  }
});
//Reseteador -----------------------------------------------------------------------
const resetGame = document.querySelector('.again');
resetGame.addEventListener('click', () => {
  scoree = 20;
  const numberGuess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = numberGuess;
  myMessage('Adivinando');
  document.querySelector('.score').textContent = scoree;
  myNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
