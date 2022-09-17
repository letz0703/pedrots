import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Link to='/'>homepage</Link>
          <Link to='/login'>login</Link>
          <Link to='/contact'>contact</Link>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
