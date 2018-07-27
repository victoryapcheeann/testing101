import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ClickCounter from './ClickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() }); 

test('renders without crashing', () => { 
  const wrapper = shallow(<ClickCounter />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', ()=> {
  
});

test('renders counter display', ()=>{
  
});

test('counter starts at 0', ()=>{
  
});

test('clicking button increments counter display',()=>{
  
}); 