import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WhereWorkHappens from './components/WhereWorkHappens';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WhereWorkHappens/>} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
