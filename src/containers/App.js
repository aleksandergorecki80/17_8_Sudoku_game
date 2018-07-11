import uuid from "uuid";
import { hot } from "react-hot-loader";
import Board from "../components/Board"

import React, { Component } from "react";
import sudoku from 'sudoku-umd';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: sudoku.generate("easy"), // do zmiany pozniej
			//initialBoard: '1', // do zmiany pozniej
			board: ""
		};
	}


	newGame() {
	
		this.setState({
			initialBoard: sudoku.generate("easy")
		});
		
	}

  render() {
  	//console.log(this.state.initialBoard);
    return (
		<div className="App">
		   <h1>Sudoku</h1>
		   {this.state.initialBoard}
		   <div className="buttons">
		       <button>Check</button>
		       <button onClick={this.newGame.bind(this)}>New Game</button>
		       <button>Solve</button>
		       <button onClick={this.newGame.bind(this)}>Restart</button>
		   </div>
		   <Board numbers = {this.state.initialBoard}/>
		</div>
    );
  }
}


export default hot(module)(App);

