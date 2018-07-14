import React, { Component } from "react";
import Title from "./Title";
import LifeStages from "../components/LifeStages"


class Board extends Component {

/*
  componentWillReceiveProps(nextProps) {
    this.setState({numbers: nextProps.numbers.split('')})
  }
*/

getValueFrom(attr){
  console.log(attr.value + 'value z getValueFrom');
  console.log(attr.index + 'index z getValueFrom');
  this.props.newNumbers(attr);
}

  render() {
    var blocked = '';
    const numbers = this.props.numbers.split('');
   const numbersList = numbers.map((number, key) =>  {
            if (number === '.'){
              number = '';
              blocked = false;
            } else {
              blocked = true;
            }
           return <Title key={key} index={key} number={number} 
           getValue={this.getValueFrom.bind(this)} blocked={blocked} />
  });   

    return (
    <div className="Board">
       <br />
        {numbersList}
      
    </div>
    );
  }
}




export default Board;