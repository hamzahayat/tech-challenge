import React, { Fragment } from 'react';

// Import Styles
import styles from './header.module.scss';

const Header = () => (
  <Fragment>
    <header className={styles.header}>
      <h1 className={styles['logo-text']}>photofinder</h1>
    </header>
  </Fragment>
);

Header.displayName = 'Header';

export default Header;
