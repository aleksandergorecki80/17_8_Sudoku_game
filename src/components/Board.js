import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Title from "./Title";



class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.props.numbers.split(''),
      recievedValue: '',
      recievedIndex: ''
    };
  }

getValueFrom(attr){
  
  this.setState({
    recievedValue: attr.value,
    recievedIndex: attr.index
  });
  
  console.log(attr.value + 'z getValueFrom');
  console.log(attr.index + 'z getValueFrom');
}


  render() {
    //const numbersList = this.props.numbers.split('');
    console.log(this.state.recievedValue + 'tu');
   console.log(this.state.recievedIndex + 'tu');
    
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