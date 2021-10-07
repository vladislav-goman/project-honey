import { Navigation, NAVIGATION_ARRAY } from './Navigation';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('should render navigation links', () => {
    render(<Navigation />);
    const navItems = screen.getAllByRole('link');
    expect(navItems.length).toEqual(NAVIGATION_ARRAY.length);
    navItems.forEach((navItem, index) =>
      expect(navItem.textContent).toEqual(NAVIGATION_ARRAY[index].title)
    );
  });
});
