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
			board: ''
		};
	}



	newGame() {
		const newGame = sudoku.generate("easy")
		this.setState({
			initialBoard: newGame,
			board: newGame
		});
	}

	checkGame(){

		let verifiedTable = this.state.board.split('');
			let properTable = sudoku.solve(this.state.initialBoard);
			console.log(properTable);
			 

		if (this.state.board === properTable){
			console.log('TACY SAMI');
		} else {
			console.log('Calkiem inni');
			properTable = properTable.split('');

			 verifiedTable = verifiedTable.map((number, key) =>{
			 	if (number === properTable[key]){
			 		//console.log(properTable[key])
			 	console.log('numbery takie same' + number);
			 	return number;
			 } else {
			 	console.log('numbery inne' + number);
			 	return '.';
			 }
			 
			 });
console.log(verifiedTable);
		this.setState({
			board: verifiedTable.join('')
		})
		}
	}

	solveGame(){
		this.setState({
			board: sudoku.solve(this.state.initialBoard)
		});
	}

/*		logika podmiany nrka*/
	getNewNumbers(numbers){	// podmienia nry w tablicy na te wpisane
		let updatedArray = this.state.board.split('');
	  		updatedArray = updatedArray.map((number, key) => {
    if (key === numbers.index){
      return numbers.value
    } else {
      return number;
    }
  });
 // console.log(updatedArray);
  //console.log('updatedArray');
  this.arrayToString(updatedArray);
  this.setNewNumbers(this.arrayToString(updatedArray));
}

	arrayToString(newArray){	// zamienia tablice na stringa
	  //console.log(newArray.join(''));
	  return newArray.join('');
	}

	setNewNumbers(string){ //ustawia nowego stringa po wpisaniu nru
		this.setState({
			board: string
		});
	}

	/*				*********				*/

		restartGame(){
		this.setState({
			board: this.state.initialBoard
		});
	}

  render() {

  	console.log(this.state.initialBoard + ' initialBoard');
  	console.log(this.state.board + ' board');
    return (
		<div className="App">
		   <h1>Sudoku</h1>
		   {this.state.initialBoard}
		   {this.state.board}
		   <div className="buttons">
		       <button onClick={this.newGame.bind(this)}>New Game</button>
		       <button onClick={this.checkGame.bind(this)}>Check</button>
		       <button onClick={this.solveGame.bind(this)}>Solve</button>
		       <button onClick={this.restartGame.bind(this)}>Restart</button>
		   </div>
		   <Board numbers = {this.state.board} 
		   newNumbers={this.getNewNumbers.bind(this)} test='kki'/>
		</div>
    );
  }
}


export default App;

