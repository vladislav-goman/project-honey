import { ActionsMenu, ACTIONS_ARRAY } from './ActionsMenu';
import { render, screen } from '../../../test/test-utils';

describe('ActionsMenu', () => {
  it('should render action menu items', () => {
    render(<ActionsMenu />);
    const navItems = screen.getAllByRole('link');
    expect(navItems.length).toEqual(ACTIONS_ARRAY.length);
    navItems.forEach((navItem, index) =>
      expect(navItem.textContent).toEqual(ACTIONS_ARRAY[index].title)
    );
  });
  it('should render images with accessible roles', () => {
    render(<ActionsMenu />);
    const navItems = screen.getAllByRole('img');
    expect(navItems.length).toEqual(ACTIONS_ARRAY.length);
    navItems.forEach((navItem, index) =>
      expect(navItem).toHaveAccessibleName(ACTIONS_ARRAY[index].title)
    );
  });
});
