import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const title = 'Hello World';
  it('should render passed title', () => {
    const { getByText } = render(<Button title={title} />);
    expect(getByText(title)).toHaveTextContent(title);
  });
  it('should be clickable and call passed callback once clicked', () => {
    const cb = jest.fn();
    render(<Button title={title} onClick={cb} />);
    const button = screen.getByRole('button', { name: title });
    userEvent.click(button);
    expect(cb).toHaveBeenCalled();
  });
});
