import React, { Component } from "react";
import uuid from "uuid";
import Board from "../components/Board";
import sudoku from "sudoku-umd";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: "",
      board: "",
      message: "",
      thisPlay: false,
      boardOn: false,
      level: "easy"
    };
  }

  selectLevel(event) {
    this.setState({
      level: event.target.value
    });
  }

  setNewGame() {
    const newGame = sudoku.generate(this.state.level);
    this.setState({
      initialBoard: newGame,
      board: newGame,
      thisPlay: !this.state.thisPlay,
      boardOn: true,
      message: ""
    });
  }

  checkGame() {
    if (this.state.boardOn) {
      const numbersToCheck = this.state.board.split("");
      const solutionNumbers = sudoku.solve(this.state.initialBoard);
      if (this.state.board === solutionNumbers) {
        this.setState({
          message: "Game is finished, congratulations."
        });
      } else {
        const solutionNumbersArr = solutionNumbers.split("");
        const wrongToEmpty = (number, index) =>
          number === solutionNumbersArr[index] ? number : ".";
        const checkedNumbers = numbersToCheck.map(wrongToEmpty).join("");
        this.setState({
          board: checkedNumbers,
          message: "Game is not finished."
        });
      }
    }
  }

  solveGame() {
    if (this.state.boardOn) {
      this.setState({
        board: sudoku.solve(this.state.initialBoard),
        message: "Game over."
      });
    }
  }

  getNewNumbers(numbers) {
    const updatedArray = this.state.board.split("");
    const putInTheNumber = (number, key) =>
      key === numbers.index ? numbers.value : number;
    const updatetStringOfNumbers = updatedArray.map(putInTheNumber).join("");
    this.setNewNumbers(updatetStringOfNumbers);
  }

  setNewNumbers(string) {
    this.setState({
      board: string,
      message: ""
    });
  }

  restartGame() {
    if (this.state.boardOn) {
      this.setState(prevState => ({
        board: prevState.initialBoard,
        message: "",
        boardOn: true
      }));
    }
  }

  render() {
    const cursor = this.state.boardOn ? styles.Pointer : styles.NoCursor;
    return (
      <div className={styles.Container}>
        <h1>Sudoku</h1>
        <p className={styles.Message}> {this.state.message}</p>
        <div className={styles.Buttons}>
          <select onChange={this.selectLevel.bind(this)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={this.setNewGame.bind(this)}>New Game</button>
          <button onClick={this.checkGame.bind(this)} className={cursor}>
            Check
          </button>
          <button onClick={this.solveGame.bind(this)} className={cursor}>
            Solve
          </button>
          <button onClick={this.restartGame.bind(this)} className={cursor}>
            Restart
          </button>
        </div>
        <Board
          numbers={this.state.board}
          newNumbers={this.getNewNumbers.bind(this)}
          thisPlay={this.state.thisPlay}
        />
      </div>
    );
  }
}

export default App;
