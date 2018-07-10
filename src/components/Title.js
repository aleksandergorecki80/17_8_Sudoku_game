import React, { Component } from "react";

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	onAddValue(event) {
		this.setState({
			value: event.target.value
		});
	}

  render() {
  	console.log(this.state.value);
    return (
		<div>
			<input type="number" name="field" min="1" max="9" onChange={this.onAddValue.bind(this)}/>
		</div>
		);
	}
}

export default Title;