import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import EmployeeBlock from './components/employeeBlock'
import GetPage from './components/getPage';
import EditEmployee from './components/editEmployee';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  

  return (
    <>
      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<EmployeeBlock />} />
          <Route path="/records" element={<GetPage />} />
          <Route path="/edit/:id" element={<EditEmployee/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;