import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import DesignerView from './pages/Designer';
import AdminDashboard from './pages/Admin';
import './index.css';

// Lazy loading pages for performance (Frontend Specialist rule)
// For now, simple imports until files are created
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/designer" element={<DesignerView />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
