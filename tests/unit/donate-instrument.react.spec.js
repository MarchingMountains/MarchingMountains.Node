// __specs__/donate-instruments.react.spec.js
jest.dontMock('../app/components/annual-reports'); 
jest.dontMock('../app/components/band-directors'); 
jest.dontMock('../app/components/contact'); 
jest.dontMock('../app/components/donate-instrument'); 
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import TestUtils from 'react-addons-test-utils';
const AnnualReport = require('../app/components/annual-reports');
const BandDirectors = require('../app/components/band-directors');
const Contact = require('../app/components/contact');
const DonateInstrument = require('../app/components/donate-instrument');

describe('Annual Report', function(){
	it('renders', function(){
		// Render a checkbox with label in the document
	var checkbox = TestUtils.renderIntoDocument( <AnnualReport /> ); 
	var checkboxNode = ReactDOM.findDOMNode(checkbox);  // Verify that it's Off by default
	expect(checkboxNode.textContent).toContain('2014 Annual Report');
	});
});

describe('Band Directors', function(){
	it('renders', function(){
		// Render a checkbox with label in the document
	var checkbox = TestUtils.renderIntoDocument( <BandDirectors /> ); 
	var checkboxNode = ReactDOM.findDOMNode(checkbox);  // Verify that it's Off by default
	expect(checkboxNode.textContent).toContain('Welcome Band Directors');
	});
});

describe('Contact', function(){
	it('renders', function(){
		// Render a checkbox with label in the document
	var checkbox = TestUtils.renderIntoDocument( <Contact /> ); 
	var checkboxNode = ReactDOM.findDOMNode(checkbox);  // Verify that it's Off by default
	expect(checkboxNode.textContent).toContain('700 Douglas Ave. #1007');
	});
});

describe('Donate Instrument', function(){
	it('renders', function(){
		// Render a checkbox with label in the document
	var checkbox = TestUtils.renderIntoDocument( <DonateInstrument /> ); 
	var checkboxNode = ReactDOM.findDOMNode(checkbox);  // Verify that it's Off by default
	expect(checkboxNode.textContent).toContain('Donating an instrument');
	});
});