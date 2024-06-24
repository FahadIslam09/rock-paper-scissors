let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Loses: 0,
  Ties: 0
};

updateScore();
resetScoreHidden();

function playGame(playerMove) {
  const computerMove = pickedComputerMove();
  
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'It\'s a tie!';

  } else if (computerMove === 'Paper') {
    result = 'You Lose!';

  } else if (computerMove === 'Scissors') {
    result = 'You Win!';
  }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You Win!';

  } else if (computerMove === 'Paper') {
    result = 'It\'s a tie!';

  } else if (computerMove === 'Scissors') {
    result = 'You Lose!';
  }

  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
    result = 'You Lose!';

    } else if (computerMove === 'Paper') {
      result = 'You Win!';

    } else if (computerMove === 'Scissors') {
      result = 'It\'s a tie!';
    }
  }

  if (result === 'You Win!') {
    score.Wins += 1;
  } else if (result === 'You Lose!') {
    score.Loses += 1;
  } else if (result === 'It\'s a tie!') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png"> <img src="${computerMove}-emoji.png"> Computer`;
  document.querySelector('.hidden-reset-button').classList.add('show-reset-button');
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;
}

function pickedComputerMove() {
  const randomNumber = Math.random();
  
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors'
  }

return computerMove;
}

function resetScore() {
  score.Wins = 0;
  score.Loses = 0;
  score.Ties = 0;
  
  localStorage.removeItem('score');

  updateScore();

  document.querySelector('.js-result').innerHTML = ``;
  document.querySelector('.js-moves').innerHTML = ``;
  resetScoreHidden();
}

function resetScoreHidden() {
  if (updateScore() === (score === true)) {
    document.querySelector('.hidden-reset-button').classList.add('show-reset-button');
  } else if (score.Wins === 0 && score.Loses === 0 && score.Ties === 0) {
    document.querySelector('.hidden-reset-button').classList.remove('show-reset-button');
  } else {
    document.querySelector('.hidden-reset-button').classList.add('show-reset-button');
  }
}