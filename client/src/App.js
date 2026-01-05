import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';
import TypingPage from './TypingPage';
import ProtectedRoute from './ProtectedRoute';
import ResultsPage from './ResultsPage';
import RecordPage from './RecordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path = "/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected Routes */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
          />
        <Route
          path="/test/:difficulty"
          element={
            <ProtectedRoute>
              <TypingPage />
            </ProtectedRoute>
          }
          />
        <Route path="/results" element={<ResultsPage />} />
        <Route
          path="/record/:difficulty"
          element={
            <RecordPage />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;