import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import styles from './App.module.css';
import { QueryProvider } from './store/query-provider';

function App() {
  return (
    <QueryProvider>
      <Router>
        <div className={styles.container}>
          <Sidebar />
          <MainContent />
        </div>
      </Router>
    </QueryProvider>
  );
}

export default App; 