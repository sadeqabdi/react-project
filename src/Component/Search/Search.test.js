import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './Search';
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
    ReactDOM.render(<Search/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Search > Test input', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = (opt) => {
            if (opt === 'shallow') 
            return shallow(<Search />)
            else
            return mount(<Search />)

        };
    });
    it('check input search', () => {
        const checkInput = wrapper('shallow');
        expect(checkInput.find('div#search-id').isEmpty()).to.be.false;
    });

});