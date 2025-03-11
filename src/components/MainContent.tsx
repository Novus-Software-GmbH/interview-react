import { Routes, Route } from 'react-router-dom';
import styles from './MainContent.module.css';
import Buildings from './Buildings';
import logo from '../assets/zeag_wowiconsult_logo+topjob-logo.jpg';

const Home = () => (
  <div className={styles.page} style={{float:'left', width:'100%'}}>
    <h2>Hallo Bewerber!</h2>
    <p>Willkommen bei wowi consult. Wir freuen uns darauf, zu sehen, was du so kannst :)</p>
    <p><img src={logo} width="400"></img></p>
  </div>
);

const MainContent = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/buildings" element={<Buildings />}>
        </Route>
      </Routes>
    </main>
  );
};

export default MainContent; 