import uuid from "uuid";
import { hot } from "react-hot-loader";
import Board from "../components/Board"
import LifeStages from "../components/LifeStages"

import React, { Component } from "react";
import sudoku from 'sudoku-umd';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//initialBoard: sudoku.generate("easy"), // do zmiany pozniej
			initialBoard: '', 
			board: ""
		};
	}


	newGame() {
		const newGame = sudoku.generate("easy")
		this.setState({
			initialBoard: newGame,
			board: newGame
		});
		
	}

	restartGame(){
		this.setState({
			initialBoard: this.state.initialBoard
		});
	}

	setNewNumbers(string){
		this.setState({
			board: string
		});
	}

  render() {
  	//console.log(this.state.initialBoard + ' initialBoard');
  	//console.log(this.state.board + ' board');
    return (
		<div className="App">
		   <h1>Sudoku</h1>
		   {this.state.initialBoard}
		   {this.state.board}
		   <div className="buttons">
		       <button>Check</button>
		       <button onClick={this.newGame.bind(this)}>New Game</button>
		       <button>Solve</button>
		       <button onClick={this.restartGame.bind(this)}>Restart</button>
		   </div>
		   <Board numbers = {this.state.board} newNumbers={this.setNewNumbers.bind(this)}/>
			
		</div>
    );
  }
}


export default App;

