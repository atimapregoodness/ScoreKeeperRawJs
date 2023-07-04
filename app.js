const p1ScoreDisplay = document.querySelector('#p1-score-display')
const p2scoreDisplay = document.querySelector('#p2-score-display')

const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const plato = document.querySelector('#upto')


p1Score = 0;
p2Score = 0;
winningScore = 3;
isGameOver = false;


p1Btn.addEventListener('click', () => {
      if (!isGameOver) {
            p1Score += 1;
            p1ScoreDisplay.textContent = p1Score;

            if (p1Score === winningScore) {
                  isGameOver = true;
                  p1Btn.disabled = true;
                  p2Btn.disabled = true;
                  p1ScoreDisplay.classList.add('winner')
                  p2scoreDisplay.classList.add('loser')
            }
      }

})

p2Btn.addEventListener('click', () => {
      if (!isGameOver) {
            p2Score += 1;
            p2scoreDisplay.textContent = p2Score;

            if (p2Score === winningScore) {
                  isGameOver = true;
                  p2Btn.disabled = true;
                  p1Btn.disabled = true;
                  p2scoreDisplay.classList.add('winner')
                  p1ScoreDisplay.classList.add('loser')
            }
      }

})

plato.addEventListener('change', () => {
      winningScore = parseInt(plato.value)
})

resetBtn.addEventListener('click', reset)


function reset() {
      p1Score = 0;
      p2Score = 0;
      winningScore = 3;
      p1ScoreDisplay.textContent = 0;
      p2scoreDisplay.textContent = 0;
      isGameOver = false;
      plato.value = 3;
      p1Btn.disabled = false;
      p2Btn.disabled = false;
      p1ScoreDisplay.classList.remove('loser', 'winner')
      p2scoreDisplay.classList.remove('loser', 'winner')
}

