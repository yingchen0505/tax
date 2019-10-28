import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./input"

class App extends React.Component {
	
	state = {
		income: 0,
		relief:0,
		damage: 0
	};
	
	// setValue = ({id, value}) => {
		// this.setState({[id]:value})
	// };
	
	setIncome = (value) => {
		this.setState({income:value})
	};
	
	setRelief = (value) => {
		this.setState({relief:value})
	};
	
	calculate = () => {
		const { income, relief} = this.state;
		const newDamage = (income - relief) * 0.1;
		this.setState({damage:newDamage})
	};
	
	render() {
	  return (
		<div className="App">
		  <Input label='Income' setValue={this.setIncome} /> 
		  <Input label='Relief' setValue={this.setRelief} />
		  <button onClick={this.calculate}>Calcualte the damage! </button>
			<br/>
			<div className="result">{this.state.damage}</div>
		</div>
	  );
	}
}

export default App;
