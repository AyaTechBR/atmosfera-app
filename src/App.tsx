import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AtmosferaApp from './pages/Atmosfera';
import LoginPage from './pages/Login';
import DesignerView from './pages/Designer';
import AdminDashboard from './pages/Admin';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AtmosferaApp />} />
        <Route path="/atmosfera" element={<AtmosferaApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/designer" element={<DesignerView />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
