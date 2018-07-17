import React, { Component } from "react";
import LifeStages from "./LifeStages";
import './bordering.css';

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
   if (nextProps.thisPlay !== this.state.thisPlay){
    	    this.setState({
    	blocked: nextProps.blocked,
    	thisPlay: nextProps.thisPlay
    });
    	    
    }
    //console.log(nextProps.thisPlay + ' next props');
  }

  	handleKeyUp(event){
  		if (event.target.value > 9 || event.target.value < 1 || event.target.value === ''){
  			this.setState({
  				value: ''
  			});
  		}
  	}

	onHandleChange(event) {
		if (event.target.value === ''){
			this.setState({
				value: ''
			});
		} else {
		this.setState({
			value: event.target.value
			});
		}
	}
	onSubmit(){
		if (this.state.value !== ''){
			const data = {value: this.state.value, index:this.state.index}
			this.props.getValue(data);
		}
	}

  render() {
  //	console.log(this.state.thisPlay + ' - title play on')
  	const printInput = (
		this.state.blocked === false ? 
  			<input 
				type="number" 
				name="field" 
				min="1" max="9" 
				onChange={this.onHandleChange.bind(this)}
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