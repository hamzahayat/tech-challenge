import React from 'react';
import Routes from './routes/routes.container';
import { Header } from './components';

import styles from './app.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <main className={styles.main}>
      <Routes />
    </main>
  </div>
);

export default App;
