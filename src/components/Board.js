import React, { Component } from "react";
import Tile from "./Tile";
import "./style.css";

class Board extends Component {
  getValueFrom(attr) {
    this.props.newNumbers(attr);
  }
  render() {
    var blocked = "";
    const numbers = this.props.numbers.split("");
    const numbersList = numbers.map((number, key) => {
      if (number === ".") {
        number = "";
        blocked = false;
      } else {
        blocked = true;
      }
      return (
        <Tile
          key={key}
          index={key}
          number={number}
          getValue={this.getValueFrom.bind(this)}
          blocked={blocked}
          thisPlay={this.props.thisPlay}
        />
      );
    });
    return <section>{numbersList}</section>;
  }
}

export default Board;

