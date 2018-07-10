import uuid from "uuid";
import { hot } from "react-hot-loader";
import Board from "../components/Board"

import React, { Component } from "react";

class App extends Component {
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

