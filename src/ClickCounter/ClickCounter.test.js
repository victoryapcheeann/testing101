import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ClickCounter from './ClickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() }); 

/*
  Factory Function to create a shallowWrapper for the App component.
  @function setup
  @parem {object} props - Component props specific to this setup
  @parem {any} states - Initial state for the setup
  @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
  return shallow(<ClickCounter {...props}/>)
}

/*
  Return shallowWrapper containing node(s) with the given data-test value
  @parem {shallowWrapper} wrapper - Enzyme shallow wrapper to search within.
  @parem {string} val - Value of data-test attribute for search
  @return {ShadowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => { 
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', ()=> {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', ()=>{
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', ()=>{
  
});

test('clicking button increments counter display',()=>{
  
}); 