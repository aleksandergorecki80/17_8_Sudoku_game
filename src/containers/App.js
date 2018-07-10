import uuid from "uuid";
import { hot } from "react-hot-loader";
import Board from "../components/Board"

import React, { Component } from "react";
import sudoku from 'sudoku-umd';

const sudokuV = sudoku;

console.log(sudokuV);
console.log(sudokuV.DIGITS);
const sudokuEasy = sudoku.generate("easy");
const sudokuMedium = sudoku.generate("medium");
const sudokuHard = sudoku.generate("hard");

console.log(sudokuEasy);
console.log(sudokuMedium);
console.log(sudokuHard);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	}
  render() {
    return (
		<div className="App">
		   <h1>Sudoku</h1>
		   <Board />
		   <div className="buttons">
		       <button>Check</button>
		       <button>New Game</button>
		       <button>Solve</button>
		       <button>Restart</button>
		   </div>
		</div>
    );
  }
}


export default hot(module)(App);

