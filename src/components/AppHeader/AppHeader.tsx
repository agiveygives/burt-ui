import React, { useState } from 'react';
import classNames from 'classnames';
import Navigation from './Navigation';
import useScrollPosition from '../../hooks/useScrollPosition';
import { AppHeaderPropTypes } from '../AppHeader/types';
import styles from './styles.module.css';

const AppHeader = ({ logoUri, navLinks, menu }: AppHeaderPropTypes) => {
  const scrollPosition = useScrollPosition();

  return (
    <header className={classNames(styles.header, { [`${styles.headerScroll}`]: scrollPosition > 0 })}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logoUri} alt='' />
      </div>

      <Navigation navLinks={navLinks} scrolled={scrollPosition > 0} />

      <div>
        {"menu.icon"}
      </div>
    </header>
  )
};

export default AppHeader;
