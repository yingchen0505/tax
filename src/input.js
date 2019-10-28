import React from 'react';
// import numeral from 'numeral';

class Input extends React.Component {
	
	state = {
		value: 0
	};
	
	handleChage(e){
		const newValue = e.target.value;
		if(!isNaN(newValue)) {
			this.setState({value:newValue})
		}
	}
	
	handleBlur = () => {
		// const { id, setValue } = this.props;
		// setValue({id: id, value: this.state.value});
		
		const {setValue}=this.props;
		this.props.setValue(this.state.value);
	};
	
	constructor(props) {
		super(props);
		this.state = {value: 0}
		this.handleChage = this.handleChage.bind(this);
	}
	
	render() {
		return (
			<div>
				<label className='label'>{this.props.label}</label>
				<input 
					onBlur={this.handleBlur}
					onChange={this.handleChage}
					value={this.state.value} />
			</div>
		)
		
	}
}

export default Input;