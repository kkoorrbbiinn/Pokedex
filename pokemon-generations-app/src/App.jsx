import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./LandingPage";
import GenerationPage from './GenerationPage';
import './App.css'

const App = () => {
  return (
      <div>
        <nav>
          <h3>
            <Link to='/'>Home</Link>
          </h3>
        </nav>
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/generation/:id" Component={GenerationPage} />
        </Routes>
      </div>
  )
}

export default App;
