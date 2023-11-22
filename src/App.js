// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import NotFound from './Components/Notfound';
function App() {
  return (
    <Router>
      <div className="app">
      <Helmet>
        	<title>Mindeful | Landing</title>
    	</Helmet>
      <Nav></Nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
