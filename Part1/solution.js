const player = document.getElementById('player');
let board = []

const play = (val) => {
  const element = document.getElementById(val);
  let result;

  if (player.innerText === 'X') {
    player.innerText = 'O';
    element.innerText = 'X'
    board[val] = 'X'
  } else {
    player.innerText = 'X';
    element.innerText = 'O'
    board[val] = 'O'
  }

    board.map((elem,i) => {
        if(!!elem) {
            if (
                (board[0] === board[4] && board[0] === board[8]) ||
                (board[2] === board[4] && board[2] === board[6])
            ) {
                result = board[4]
            } else if (
                (i === 0 || i === 1 || i === 2) &&
                (board[i] === board[i + 3] && board[i] === board[i + 6])
            ) {
                result = elem
            } else if (
                (i === 0 || i === 3 || i === 6) &&
                (board[i] === board[i + 1] && board[i] === board[i + 2])
            ) {
                result = elem
            }
        } 
    })
    if (board.length === 9 && !board.includes(undefined)) {
        result || (result = 'CAT')
    }

    if (result) {
        window.alert(`${result} is the winner!`)
        resetBoard()
    }

   
}

const resetBoard = () => {
const tag = document.getElementsByTagName('td')

for(let i =0; i<tag.length; i++){
    tag[i].innerText = ''
}
board = []
player.innerText = 'X'
}