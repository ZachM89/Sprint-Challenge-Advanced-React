import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Player } from './Components/Player';
//import { render } from "@testing-library-react";
//import axiosMock from 'axios';

//jest.mock('axios');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  
});

// it('testing the test', () => {
//     expect(1).toBe(1);
// }) 

it('test if megan is showing', async () => {
    //const div = document.createElement('div');
    const { getByText } = ReactDOM.render(<Player />);

    const megan = getByText('Megan');

    expect(megan).toBeInTheDocument();
});



