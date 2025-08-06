//import logo from './logo.svg';

import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
      <Navbar/>
      <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/rooms/" exact element={<Rooms/>}/>
    <Route path="/rooms/:slug" exact element={<SingleRoom/>}/>
    <Route  path="*"element={<Error/>}/>
        </Routes>
    </>
   );
}

export default App;
