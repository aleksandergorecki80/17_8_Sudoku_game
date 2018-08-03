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
    if (this.state.boardOn !== false) {
      const numbersToCheck = this.state.board.split("");
      const solutionNumbers = sudoku.solve(this.state.initialBoard);
      if (this.state.board === solutionNumbers) {
        this.setState({
          message: "Game is finished, congratulations."
        });
      } else {
        const solutionNumbersArr = solutionNumbers.split("");
        const checkedNumbers = numbersToCheck.map((number, index) => {
          if (number === solutionNumbersArr[index]) {
            return number;
          } else {
            return ".";
          }
        });
        this.setState({
          board: checkedNumbers.join(""),
          message: "Game is not finished."
        });
      }
    }
  }

  solveGame() {
    if (this.state.boardOn !== false) {
      this.setState({
        board: sudoku.solve(this.state.initialBoard),
        message: "Game over."
      });
    }
  }

  getNewNumbers(numbers) {
    let updatedArray = this.state.board.split("");
    updatedArray = updatedArray.map((number, key) => {
      if (key === numbers.index) {
        return numbers.value;
      } else {
        return number;
      }
    });
    this.arrayToString(updatedArray);
    this.setNewNumbers(this.arrayToString(updatedArray));
  }

  arrayToString(newArray) {
    return newArray.join("");
  }

  setNewNumbers(string) {
    this.setState({
      board: string,
      message: ""
    });
  }

  restartGame() {
    if (this.state.boardOn !== false) {
      this.setState({
        board: this.state.initialBoard,
        message: "",
        boardOn: true
      });
    }
  }

  render() {
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
          <button onClick={this.checkGame.bind(this)}>Check</button>
          <button onClick={this.solveGame.bind(this)}>Solve</button>
          <button onClick={this.restartGame.bind(this)}>Restart</button>
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
