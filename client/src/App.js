import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginUI';
import RegisterPage from './RegisterUI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
export default App;