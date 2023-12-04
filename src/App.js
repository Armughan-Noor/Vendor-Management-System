import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import VendorManagement from './Components/VendorManagement';
import SearchPage from './Components/SearchPage';
import SignUpForm from './Components/SignUp';
import SignIn from './Components/SignIn';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import './App.css';

function App() {
  return (
    <div>
      <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search-vendor" element={<SearchPage />} />
          <Route path="/add-vendor" element={<VendorManagement />} />
        </Routes>
      </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
