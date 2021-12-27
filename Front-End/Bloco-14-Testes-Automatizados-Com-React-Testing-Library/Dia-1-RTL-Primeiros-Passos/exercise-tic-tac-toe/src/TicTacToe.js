import React from 'react';
import GameBoard from './GameBoard';

const ONE_LINE = 3;
const TWO_LINES = 6;
class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.updateGame = this.updateGame.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.checkLineWin = this.checkLineWin.bind(this);
    this.checkColumnWin = this.checkColumnWin.bind(this);
    this.checkDiagonalsWin = this.checkDiagonalsWin.bind(this);
    this.playerWin = this.playerWin.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGame(i) {
    const { gameBoard, activePlayer } = this.state;

    const boardUpdated = gameBoard.map((cellValue, index) => {
      if (index === i && cellValue === 0) {
        cellValue = activePlayer;
      }
      return cellValue;
    });

    this.setState({
      gameBoard: boardUpdated,
    }, () => {
      this.changePlayer(gameBoard, activePlayer, i);
    });
  }

  changePlayer(gameBoard, activePlayer, i) {
    if (gameBoard[i] === 0) {
      if (activePlayer === 1) {
        this.setState({ activePlayer: 2 });
      } else {
        this.setState({ activePlayer: 1 });
      }
    }
  }

  checkLineWin(gameBoard) {
    for (let index = 0; index <= TWO_LINES; index += ONE_LINE) {
      if (
        gameBoard[index] === gameBoard[index + 1]
        && gameBoard[index + 1] === gameBoard[index + 2]
        && gameBoard[index] !== 0) {
        return gameBoard[index];
      }
    }
    return false;
  }

  checkColumnWin(gameBoard) {
    for (let index = 0; index <= 2; index += 1) {
      if (
        gameBoard[index] === gameBoard[index + ONE_LINE]
        && gameBoard[index + ONE_LINE] === gameBoard[index + TWO_LINES]
        && gameBoard[index] !== 0) {
        return gameBoard[index];
      }
    }
    return false;
  }

  checkDiagonalsWin(gameBoard) {
    if (gameBoard[4] === 0) {
      return false;
    }
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  playerWin() {
    const { gameBoard } = this.state;
    return (
      this.checkLineWin(gameBoard)
      || this.checkColumnWin(gameBoard)
      || this.checkDiagonalsWin(gameBoard)
    );
  }

  resetGame() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.resetGame }
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  render() {
    const { gameBoard, activePlayer } = this.state;
    const win = this.playerWin();
    if (!gameBoard.includes(0)) {
      return (
        <>
          {this.renderButton()}
          <h1>Empatou!</h1>
        </>
      );
    }
    return (
      <>
        {this.renderButton()}
        {!win ? (
          <GameBoard
            gameState={ gameBoard }
            player={ activePlayer }
            updateGame={ this.updateGame }
          />

        ) : <h1>{`Player ${win === 1 ? 'X' : 'O'} Ganhou`}</h1>}
      </>

    );
  }
}

export default TicTacToe;
