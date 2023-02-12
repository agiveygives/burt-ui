import React, { FC } from 'react';
import { useTheme } from 'styled-components'
import { AppHeaderType } from './AppHeader.types';
import StyledAppHeader from './AppHeader.styles'
import Navigation from './Navigation';

const AppHeader: FC<AppHeaderType> = ({ isRounded, logoSrc, navItems }) => {
  const theme = useTheme();

  return (
    <StyledAppHeader theme={theme} isRounded={isRounded}>
      <div>
        <img src={logoSrc} />
      </div>
      <Navigation navItems={navItems} />
      <div>
        Menus
      </div>
    </StyledAppHeader>
  );
}

export default AppHeader;