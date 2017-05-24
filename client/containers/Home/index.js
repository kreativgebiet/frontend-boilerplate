
import React from 'react';
import Helmet from 'react-helmet';
import { MainSection } from '../../components';

import styles from './style.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Helmet title="Home" />
      <MainSection />
    </div>
  );
}
