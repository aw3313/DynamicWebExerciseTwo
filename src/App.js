import React from 'react';

import './App.css';

import Header from "./components/Header.js";
import Home from "./containers/Home.js";


function App() {
  return (
    <div className="SiteWrapper">
    <Header />
    <Home />
    </div>
  );
}

export default App;
