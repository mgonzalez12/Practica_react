// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// routes
import AppRoutes from './routes';
// asset
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')    
   
);
