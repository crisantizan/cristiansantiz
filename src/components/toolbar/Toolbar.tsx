import React, { useContext } from 'react';
import './toolbar.scss';
import { DrawerToggleButton } from '../side-drawer/DrawerToggleButton';
import { ToolbarItems } from './ToolbarItems';
import { RootContext } from '../../context/root/root.context';

export const Toolbar = ({ drawerHandleClick, changeColorOnScroll }: any) => {
  const { getState } = useContext(RootContext);
  const transparent = getState(state => state.toolbarTransparent);

  const staticClasses = `toolbar ${!transparent ? 'toolbar-invert' : ''}`;

  let classes = '';
  let itemsClasess = transparent ? '' : 'invert';

  // change background color on scrolling
  if (changeColorOnScroll) {
    classes = `toolbar toolbar-scroll ${!transparent ? 'shadow-lg' : ''}`;
  } else {
    classes = staticClasses;
  }

  return (
    <header className={classes}>
      <nav className="toolbar-navigation container px-3 mx-auto sm:px-0">
        <div className="toolbar-button">
          <DrawerToggleButton onClick={drawerHandleClick} />
        </div>
        <div className="toolbar-logo">
          <a href="#">LOGO</a>
        </div>
        <div className="spacer"></div>
        <ToolbarItems className={`toolbar-navigation-items ${itemsClasess}`} />
      </nav>
    </header>
  );
};
