import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Title from "./Title";



class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.props.numbers.split('')
    };
  }

getValueFrom(attr){
  console.log(attr.value + 'value z getValueFrom');
  console.log(attr.index + 'index z getValueFrom');
  console.log(this.state.numbers);

  const updatedArray = this.state.numbers.map((number, key) => {
    if (key === attr.index){
      return attr.value
    } else {
      return number;
    }
  });
  console.log(updatedArray);

  //this.updateArray();
  this.arrayToString(updatedArray);
}

arrayToString(newArray){
  console.log(newArray.join(''));
  return newArray.join('');
}

  render() {

    //const numbersList = this.props.numbers.split('');

    
   const numbersList = this.state.numbers.map((number, key) => ( 
    <Title key={key} index={key} number={number} getValue={this.getValueFrom.bind(this)}/>
    ));
    
    return (
    <div className="Board">
            
       

       
       <br />
       {numbersList}
    </div>
    );
  }
}




export default hot(module)(Board);