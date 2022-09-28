import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import {Home} from "./pages/Home";
import {Navbar} from "./components/navbar";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Provider} from "react-redux";
import {store} from "./store";
import {Main} from "./pages/main";
import "./App.css";
import CreatePost from "./pages/create-post/create-post";

function App() {
  // useEffect(() => {
  //   console.log("호출 useEffect");
  // }, [location]);

  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
