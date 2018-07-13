import React, { Component } from "react";
import LifeStages from "./LifeStages";
import './Title.css';

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.number,
			index: this.props.index

		};
	}

	onAddValue(event) {
		this.setState({
			value: event.target.value
		});
	}
	onSubmit(){
		//console.log('kki');
		console.log(this.state.value);
		console.log(this.state.index);
		const data = {value: this.state.value, index:this.state.index}
		this.props.getValue(data);
	}
	 componentDidUpdate(prevProps, prevState) {
 //	console.log( "Component " + this.props.componentName + " did update", prevProps, prevState);
//console.log(this.state.value + ' z componentDidUpdate');

//this.props.getValue(this.state.value);

 }

  render() {
  	const printInput = (
		this.state.value === '' ? 
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
		</div>
		);
	}
}

export default Title;