import React, { Component } from "react";
import LifeStages from "./LifeStages";
import './bordering.css';

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
    this.setState({
    	value: nextProps.number,
    	blocked: nextProps.blocked
    })
  }

  	handleKeyUp(event){
  		if (event.target.value > 9 || event.target.value < 1){
  			this.setState({
  				value: ''
  			});
  		}
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
				onKeyUp={this.handleKeyUp.bind(this)}
				onBlur={this.onSubmit.bind(this)}
				value={this.state.value || ''}
			/> 
			: <span>{this.state.value}</span>
		);
    return (
		<article>
			
			{printInput}
		</article>
		);
	}
}

export default Title;