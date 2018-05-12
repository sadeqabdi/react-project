import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { shallow, mount, configure  } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

//--------------------------------------------------
describe('Login > Render', () => {
  // global setups
  let wrapper;
  beforeEach(() => {
    wrapper = (opt) => {
      if (opt === 'shallow')
        return shallow(<Login />);
      else
        return mount(<Login />);
    };
  });

it('Login, t2', () =>{
     const  rendershallow = wrapper('shallow');
     expect(rendershallow.find('div#Login-input').isEmpty()).to.be.false;
  });
it('Login > form', () => {
  const Login = wrapper('shallow');
  expect

  });  
});



