import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Login} from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<About />}></Route>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
