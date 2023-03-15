// import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;
