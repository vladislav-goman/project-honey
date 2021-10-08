import React, { useState } from 'react';
import cx from 'classnames';
import classes from './HamburgerMenu.module.scss';

export const HamburgerMenu: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen((isOpenOld) => !isOpenOld);
    onClick();
  };

  return (
    <button
      onClick={onClickHandler}
      className={cx(classes.hamburgerMenu, { [classes.open]: isOpen })}
    >
      <div className={classes.leftTop}></div>
      <div className={classes.rightTop}></div>
      <div className={classes.leftMedium}></div>
      <div className={classes.rightMedium}></div>
      <div className={classes.leftBottom}></div>
      <div className={classes.rightBottom}></div>
    </button>
  );
};
