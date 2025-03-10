import { Routes, Route } from 'react-router-dom';
import styles from './MainContent.module.css';
import Buildings from './Buildings';

const Home = () => (
  <div className={styles.page}>
    <h2>Hallo Bewerber!</h2>
    <p>Willkommen bei wowi consult. Wir freuen uns darauf, zu sehen, was du so kannst :)</p>
  </div>
);

const MainContent = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings" element={<Buildings />} />
      </Routes>
    </main>
  );
};

export default MainContent; 