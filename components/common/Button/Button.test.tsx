import React from 'react';
import { Button } from './Button';
import { render, screen } from '../../../test/test-utils';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const title = 'Hello World';

  it('should render passed title', () => {
    const { getByText } = render(<Button title={title} />);
    expect(getByText(title)).toHaveTextContent(title);
  });

  it('should be clickable and call passed callback once clicked', async () => {
    const cb = jest.fn();
    render(<Button title={title} onClick={cb} />);
    const button = screen.getByRole('button', { name: title });
    await userEvent.click(button);
    expect(cb).toHaveBeenCalled();
  });
});
