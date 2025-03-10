import { NavLink } from 'react-router-dom';
import { FaHome, FaBuilding, FaRegBuilding } from 'react-icons/fa';
import styles from './Sidebar.module.css';
import mevivoLogo from '../assets/mevivo.png';


const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={mevivoLogo} width="150" alt="mevivo logo"></img>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/buildings" className={({ isActive }) => isActive ? styles.active : ''}>
            <FaBuilding /> Buildings
          </NavLink>
        </li>
        <li>
          <NavLink to="/flats" className={({ isActive }) => isActive ? styles.active : ''}>
            <FaRegBuilding /> Flats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar; 