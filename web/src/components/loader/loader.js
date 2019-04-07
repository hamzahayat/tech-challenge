import React from 'react';
import loaderImg from '../../assets/images/loader.gif';
import styles from './loader.module.scss';

const Loader = () => <img src={loaderImg} className={styles.loader} alt="Loading" />;

Loader.displayName = 'Loader';

export default Loader;
