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

  const updatedArray = this.state.numbers.map((number, key) => {
    if (key === attr.index){
      return attr.value
    } else {
      return number;
    }
  });
  console.log(updatedArray);
  console.log('updatedArray');
  this.props.newNumbers(this.arrayToString(updatedArray));
}

arrayToString(newArray){
  //console.log(newArray.join(''));
  return newArray.join('');
}

  render() {
    var numbersList = '';
    if (this.state.numbers !== ''){
   // console.log(this.state.numbers + 'this.state.numbers');
    //console.log('POKA poka');
       numbersList = this.state.numbers.map((number, key) =>  {
            if (number === '.'){
              number = ''
            } 
           return <Title key={key} index={key} number={number} getValue={this.getValueFrom.bind(this)}/>
  }); 

    }
    /*
   // const numbers = this.props.numbers.split('');
   const numbersList = this.state.numbers.map((number, key) => ( 
    <Title key={key} index={key} number={number} getValue={this.getValueFrom.bind(this)}/>
    ));   
*/
    return (
    <div className="Board">
       <br />
        {numbersList}
       <LifeStages componentName={'Board'}/>
    </div>
    );
  }
}




export default hot(module)(Board);