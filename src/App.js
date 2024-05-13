import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signups';
import CompanyProfile from './components/CompanyProfile';
import Planos from './components/Plans';
import ContactForm from './components/ContactForm';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<CompanyProfile />} />
          <Route path="/plans" element={<Planos />} />
          <Route path="/contact/:planoNome" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
