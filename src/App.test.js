import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() }); 

test('renders without crashing', () => { 
  //git use 'it' or 'test', but test is in the jest official documentation
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  //debug function is useful for debugging
  /*
  jest expect api
  expect(wrapper).toBeTruthy();
  expect(wrapper).toBeFalsy();
  */
});

/*
Step 1) npm test
Will not retest the files u committed unless u made changes to it

Step 2) watch mode - changes since the last commit, no re run test
Watch usage command

Step 3) Run test for files end with .test.js

Step 4) Enzyme vs react-dom

Enzyme has better tool
-Search throught DOM 
-Simulate simple events

Shallow Rendering
-Render components only one level deep
-Render parent but use placeholders for children components
->Cleaner and faster testing

-Manipulate values
-Examine/test for values

Step 5) Setting up Enzyme
npm install ajv
npm install --save-dev jest enzyme jest-enzyme enzyme-adapter-react-16
->Enzyme adapter, what type of code to expect

Step 6) Shallow Rendering (Enzyme Doc)

Step 7) Types of test - Unit/Integration test/Acceptance End to end test

Step 8) Primary global
Test behavior, not implementation
-Do not want to rewrite tests after refactor
-Keep in mind while writing test

Feature to tests
-App keeps counter of button click count
-Click count is stored in component state 

Good test
-Set initial state 
-Simulate clicking a button that increments counter 
-Check to see if counter state was incremented

Bad test
-Set initial state 
-Simulate clicking a button that increments counter 
-Check to see if particular function was called

Why bad?
Testing implementation (function name)
Not behavior (state update)

Isn't state an implementation?
Sometimes skip unit, focus on integration
-Art not science
-Find your own style

Step 9) Snapshot testing?
Freeze a component
Test fails if any changes
-No TDD
-Brittle (any change to component will break)
-Too easy to ignore failures and update
-No test intent
-If used, its alongside traditional test
*/
