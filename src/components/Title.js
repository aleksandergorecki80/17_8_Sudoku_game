import React, { Component } from "react";
import LifeStages from "./LifeStages";
import './Title.css';

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.number,
			index: this.props.index,
			blocked: this.props.blocked

		};
	}

	componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.number})
  }

	onAddValue(event) {
		this.setState({
			value: event.target.value
		});
	}
	onSubmit(){
		const data = {value: this.state.value, index:this.state.index}
		this.props.getValue(data);
	}

  render() {
  	const printInput = (
		this.state.blocked === false ? 
  			<input 
				type="number" 
				name="field" 
				min="1" max="9" 
				onChange={this.onAddValue.bind(this)}
				onKeyUp={this.handleKeyUp}
				onBlur={this.onSubmit.bind(this)}
				value={this.state.value || ''}
			/> 
			: <span>{this.state.value}</span>
		);
    return (
		<div>
			{this.state.index}
			{printInput}
			{this.props.test}
		</div>
		);
	}
}

export default Title;