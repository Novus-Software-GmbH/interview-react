import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import Buildings from './Buildings';
import logo from '../assets/zeag_wowiconsult_logo+topjob-logo.jpg';

const Home = () => {
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (  
  <div className={styles.page} style={{ float: 'left', width: '100%' }}>
    <h2>Hallo Bewerber!</h2>
    <p>Willkommen bei wowi consult. Wir freuen uns darauf, zu sehen, was du so kannst :)</p>
    <p><img src={logo} width="400px" alt="mevivo logo"></img></p>
    <p>Sekunden auf dieser Seite: {count}</p>
  </div>
  );
}

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