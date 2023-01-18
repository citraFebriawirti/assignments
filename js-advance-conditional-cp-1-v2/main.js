function rockPaperScissor(player1, player2) {
  if (player1 == 'paper') {
    if (player2 == 'rock') {
        return ('Player 1 Won!')
    } else if (player2 == 'scissor') {
      return ('Player 2 Won!')
    } else {
      return ('Draw!')
    }
    
  } else if (player1 == 'rock') {
    if (player2 == 'scissor') {
      return("Player 1 Won!") 
    }else if (player2 == 'paper') {
      return('Player 2 Won!') 
    } else {
      return ('Draw!')
    }

  } else if (player1 == 'scissor') {
    if (player2 == 'rock') {
      return ("Player 2 Won!") 
    } else if (player2 == 'paper') {
      return('Player 1 Won!') 
    } else {
      return ('Draw!')
    }
  } 
  } 

  console.log(rockPaperScissor('scissor', 'paper')); // "Player 1 Won!"
  console.log(rockPaperScissor('rock', 'paper')); // "Player 2 Won!"
  console.log(rockPaperScissor('paper', 'paper')); // "Draw!"
  console.log(rockPaperScissor('rock', 'rock')); // "Draw!"
  
  module.exports = rockPaperScissor;
  