import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // Import createBrowserHistory

import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
    return (
        <>
            <Router history={createBrowserHistory()}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Router>
        </>
    );
}

export default App;
