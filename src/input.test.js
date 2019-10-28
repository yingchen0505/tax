import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import Input from "./input"

configure({ adapter: new Adapter() });

describe ('Input', function() {
	let wrapper;
	
	beforeEach (function() {
		wrapper = shallow (<Input />);
		
	});

	it('should render the label', function () {
		let testLabel = 'Test Label';
		wrapper.setProps({label: testLabel});
		expect(wrapper.find('.label').text()).toBe(testLabel);
	}); 
	
	it('should read the number', function() {
		const number = 50;
		const input = wrapper.find('input');
		input.simulate("change", {target: {value : number}});
		expect(wrapper.state('value')).toBe(number);
	});

	// describe('calculate the damage', function () {
		// it('should give me damage', function () {
			// wrapper.setState({income: 1000, relief: 500});
		// });
	// });
});