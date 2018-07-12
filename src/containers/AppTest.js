import React, { Component } from "react";

class Parent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  changeValue(value){
    this.setState({value});
  }
  render(){
    return (
      <div>
          <Child1 value={this.state.value}/>
          <Child2 changeValue={changeValue}/>
      </div>
    )
  }
}


class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: ""
    }
  }
  handleChange(e){
    var {value} = e.target;
    this.setState({
      input: value
    },() => this.props.changeValue(value));
  }
  render(){
    return (
      <div>
          <input value={this.state.input} onChange={this.handleChange}/>
      </div>
    )
  }
}



class Child1 extends Component {

  constructor(props) {
    super(props);
    this.state={value:''}
  }
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }


  render(){
    return (
      <div>
          {this.props.value}
      </div>
    )
  }
}