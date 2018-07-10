import React, { Component } from "react";

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.number
		};
	}

	onAddValue(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleKeyUp(event){
		if(event.keyCode ===13){
			this.props.addNumber(this.state.value);
		}
	}

  render() {
  	console.log(this.props.index + 'index');
  	console.log(this.props.number);
    return (
		<div>

			<input 
				type="number" 
				name="field" 
				min="1" max="9" 
				onChange={this.onAddValue.bind(this)}
				onKeyUp={this.handleKeyUp}
				value={this.state.value || ''}
			/>
		</div>
		);
	}
}

export default Title;