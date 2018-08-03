import React, { Component } from "react";
import styles from "./bordering.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.number,
      index: this.props.index,
      blocked: this.props.blocked,
      thisPlay: this.props.thisPlay
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.number
    });
    if (nextProps.thisPlay !== this.state.thisPlay) {
      this.setState({
        blocked: nextProps.blocked,
        thisPlay: nextProps.thisPlay
      });
    }
  }

handleKeyUp(event) {
  if(event.target.value > 9){
      const nString = event.target.value.toString();
      const digits = nString.split("");
      console.log(digits);
      let lastDigit = digits[digits.length-1];
      if (lastDigit == 0){lastDigit = digits[digits.length-2];}
    this.setState({
         value: lastDigit
     });
  } else if (event.target.value === ""){
    this.setState({
         value: ""
     });
  }
}

  onHandleChange(event) {
      this.setState({
        value: event.target.value
      });
  }
  onSubmit() {
    if (this.state.value !== "") {
      const data = { value: this.state.value, index: this.state.index };
      this.props.getValue(data);
    }
  }

  render() {
    const printInput =
      this.state.blocked === false ? (
        <input
          type="number"
          name="field"
          min="1"
          max="9"
          onChange={this.onHandleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          onBlur={this.onSubmit.bind(this)}
          onMouseOut={this.onSubmit.bind(this)}
          value={this.state.value || ""}
        />
      ) : (
        <span>{this.state.value}</span>
      );
    return <div className={styles.Field}>{printInput}</div>;
  }
}

export default Title;
