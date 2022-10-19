import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './componenets/home';
import Header from './componenets/header';
import Projects from './componenets/project';
import Footer from './componenets/footer';
import NotFound from './componenets/notfound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:projectName" element={<Projects />}></Route> */}
        {/* <Route path="/archive" element={<Home />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
