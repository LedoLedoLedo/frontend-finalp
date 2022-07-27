import './App.css';
import React from 'react';
import Home from "./components/Home"
// import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'

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
    {/* <p>{!data ? "Loading..." : data}</p> */}
    </Routes>
    </div>
  );
}

export default App;
