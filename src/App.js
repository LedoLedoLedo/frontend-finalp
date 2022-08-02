import './App.css';
import React from 'react';
import Home from "./components/Home"
 import Navbar from './components/Navbar';
import {Routes,Route, Link, } from 'react-router-dom';
import Search from './components/Search';
import {BrowserRouter} from 'react-router-dom'
import CreatePost, { Post } from './components/PostSection'
import NotFound from "./components/NotFound";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/search" element={<Search/>}></Route>
     <Route path="/posts" element={<CreatePost/>}></Route>
    {/* <p>{!data ? "Loading..." : data}</p> */}
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

    <div>
     <Link  to="/search"> search</Link>
    </div>



export default App