import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App; 