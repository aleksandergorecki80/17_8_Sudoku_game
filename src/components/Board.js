import React, { Component } from "react";
import sudoku from 'sudoku-umd';
import Title from "./Title";

const sudokuV = sudoku;

console.log(sudokuV);
console.log(sudokuV.DIGITS);

class Board extends Component {
  render() {
    return (
    <div className="Board">
            
       <p>board</p>
       <Title />
    </div>
    );
  }
}



export default Board;