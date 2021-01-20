// import { render, screen } from '@testing-library/react';
// import App from './app';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useReducer } from 'react';
import userEvent from '@testing-library/user-event'
import App from './app'

describe('Form', ()=>{
  test('Can add an item to the list', async ()=>{
    render(<App/>);
    userEvent.click(screen.getByTestId('todoItem'), 'item added');
    userEvent.click(screen.getByTestId('assignee'), 'Ricardo');
    userEvent.click(screen.getByTestId('submit'));
    let items = await waitFor(()=>{
      screen.getAllByRole('listItem')
    })
    expect(items[items.length -1]).toHaveTextContent('item added')
  })
})



