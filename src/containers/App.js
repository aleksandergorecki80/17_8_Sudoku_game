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
      palyOn: false,
      level: "easy"
    };
  }

  selectLevel(event) {
    this.setState({
      level: event.target.value
    });
  }

  // newGame() {
  //   let newGame = "";
  //   switch (this.state.level) {
  //     case "medium":
  //       newGame = sudoku.generate("medium");
  //       break;
  //     case "hard":
  //       newGame = sudoku.generate("hard");
  //       break;
  //     case "easy":
  //       newGame = sudoku.generate("easy");
  //       break;
  //   }
  //   this.setNewGame(newGame);
  // }

  setNewGame() {
    const newGame = sudoku.generate(this.state.level); 
    this.setState({
      initialBoard: newGame,
      board: newGame,
      thisPlay: !this.state.thisPlay,
      palyOn: true,
      message: ""
    });
  }

  checkGame() {
    if (this.state.palyOn !== false) {
      let verifiedTable = this.state.board.split("");
      let properTable = sudoku.solve(this.state.initialBoard);
      if (this.state.board === properTable) {
        this.setState({
          message: "Game is finished, congratulations.",
          palyOn: false
        });
      } else {
        properTable = properTable.split("");
        verifiedTable = verifiedTable.map((number, index) => {
          if (number === properTable[index]) {
            return number;
          } else {
            return ".";
          }
        });
        this.setState({
          board: verifiedTable.join(""),
          message: "Game is not finished."
        });
      }
    }
  }

  solveGame() {
    if (this.state.palyOn !== false) {
      this.setState({
        board: sudoku.solve(this.state.initialBoard),
        message: "Game over.",
        palyOn: false
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
    this.setState({
      board: this.state.initialBoard,
      message: "",
      palyOn: true
    });
  }

  render() {
    console.log(this.state.initialBoard);
    console.log(this.state.board);
    console.log(this.state.level);
    return (
      <div className={styles.Container}>
        <h1>Sudoku</h1>
        <p className={styles.Message}> {this.state.message}</p>
        <div className={styles.Buttons}>
          <select onBlur={this.selectLevel.bind(this)}>
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
