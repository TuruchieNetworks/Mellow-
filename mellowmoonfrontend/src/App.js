import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Landing />
    <Routes>
    <Route exact path='/Landing' element={ <Landing /> } />
    <Route exact path='/Register' element={ <Register /> } />
    <Route exact path='/Login' element={ <Login /> } />
    </Routes>
  </Router>
  );
}

export default App;
