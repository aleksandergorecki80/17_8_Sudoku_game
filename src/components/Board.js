import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Title from "./Title";
import LifeStages from "../components/LifeStages"


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ''  // to do zmiany
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({numbers: nextProps.numbers.split('')})
  }


  /* ponizej az ro render jest dobrze NIE RUSZAĆ !!!!!!!!!!*/

getValueFrom(attr){
  console.log(attr.value + 'value z getValueFrom');
  console.log(attr.index + 'index z getValueFrom');
  console.log(this.state.numbers);
  this.props.newNumbers(attr);
}

  render() {
    /*
    var numbersList = '';
    var blocked = '';
    if (this.state.numbers !== ''){
   // console.log(this.state.numbers + 'this.state.numbers');
    //console.log('POKA poka');
       numbersList = this.state.numbers.map((number, key) =>  {
            if (number === '.'){
              number = '';
              blocked = false;
            } else {
              blocked = true;
            }
           return <Title key={key} index={key} number={number} 
           getValue={this.getValueFrom.bind(this)} blocked={blocked}/>
  }); 

    }
    */
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
           getValue={this.getValueFrom.bind(this)} blocked={blocked}/>
  });   

    return (
    <div className="Board">
       <br />
        {numbersList}
      
    </div>
    );
  }
}




export default hot(module)(Board);