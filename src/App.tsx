import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Login} from './pages/Login';

// prev: create configure store.ts with reduxjs/toolkit @store.ts
import {Provider} from 'react-redux';
// todo: 뭘 provide 할 건데? wrap components allowing acess to states
// todo: <Router>를 감싼다.
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/' element={<About />}></Route>
            <Route path='/' element={<Login />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
