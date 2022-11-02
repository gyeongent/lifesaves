import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './componenets/home';
import Header from './componenets/header';
import Projects from './componenets/project';
import Footer from './componenets/footer';
import NotFound from './componenets/notfound';
import Support from './componenets/support';
import ArchivePage from './componenets/archive';
import CheckPW from './componenets/pwcheck';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='body'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/support" element={<Support />}></Route>
            <Route path="/projects" element={<Projects />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/archive/check" element={<CheckPW />} />
            <Route path="/projects/:projectName" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/archive" element={<Home />}></Route> */}
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
