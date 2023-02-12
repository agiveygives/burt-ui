import React, { FC } from 'react';
import StyledNavigation from './Navigation.styles';
import { NavigationType } from './Navigation.types';

const Navigation: FC<NavigationType> = ({ navItems }) => {
  return (
    <StyledNavigation navItems={navItems}>
      {
        navItems.map(({ to, display }) => (
          <li key={to}><a href={to}>{display}</a></li>
        ))
      }
    </StyledNavigation>
  );
}

export default Navigation;
