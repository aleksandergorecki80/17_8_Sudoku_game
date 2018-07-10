import React, { Component } from "react";

import Title from "./Title";



class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.props.numbers.split('')
    };
  }

  render() {
    //const numbersList = this.props.numbers.split('');
    console.log(this.state.numbers);
    
   const numbersList = this.state.numbers.map((number, key) => ( 
    <Title key={key} index={key} number={number}/>
    ));
    
    return (
    <div className="Board">
            
       

       
       <br />
       {numbersList}
    </div>
    );
  }
}




export default Board;