import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './componenets/home';
import Header from './componenets/header';
import Projects from './componenets/project';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:projectName" element={<Projects />}></Route>
        <Route path="/archive" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
