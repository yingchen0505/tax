import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Input from "./input"
import { shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});


describe ('App', function() {
	let wrapper;
	
	beforeEach (function() {
		wrapper = shallow (<App />);
	});

	it('should have 2 inputs', function () {
		expect(wrapper.find(Input).length).toBe(2);
	}); 

	describe('calculate the damage', function () {
		
		beforeEach (function() {
			wrapper.setState({income: 1000, relief: 500});
			wrapper.instance().calculate();
		});
		
		it('calculate', function () {
			expect(wrapper.state('damage')).toBe(50);
		});
		
		it('should give me damage', function() {
			expect(wrapper.find('.result').text()).toBe('50');
		});
	});
});