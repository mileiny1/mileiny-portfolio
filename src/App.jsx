import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project'; // make sure the component is named Projects
import ProjectDetails from './components/ProjectDetails';
import Resume from './components/Resume';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />  {/* ✅ corrected */}
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/resume' element={<Resume />} />
     
      </Routes>
      
    </Router>
  );
}
 

export default App;



