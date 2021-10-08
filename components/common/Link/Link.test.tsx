import React from 'react';
import { Link } from './Link';
import { render } from '../../../test/test-utils';

describe('Link', () => {
  const title = 'Hello World';
  const href = 'http://localhost/';
  it('should render passed title and have href set', () => {
    const { getByText } = render(<Link href={href}>{title}</Link>);
    expect(getByText(title)).toHaveTextContent(title);
    expect(getByText(title)).toHaveProperty('href', href);
  });
});
