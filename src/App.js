import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './componenets/home';
import Header from './componenets/header';
import Projects from './componenets/project';
import Footer from './componenets/footer';
import NotFound from './componenets/notfound';
import Support from './componenets/support';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/support" element={<Support />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectName" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/archive" element={<Home />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;