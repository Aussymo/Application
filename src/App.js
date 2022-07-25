import React from 'react';
import './App.css';
import Navigation from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Create from './pages/create';
import Read from './pages/read';
import Update from './pages/update';
  
function App() {
return (
    <Router>
    <Navigation />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/read' element={<Read/>} />
    </Routes>
    </Router>
);
}
  
export default App;
