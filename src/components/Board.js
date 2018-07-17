import React, { Component } from "react";
import Title from "./Title";
import LifeStages from "../components/LifeStages";
import "./Style.css";

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
        <Title
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
