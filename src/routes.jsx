import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import ListUsers from './containers/ListUsers';
import { GlobalStyle } from './styles/GlobalStyle'




function RoutesUsers() {

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<ListUsers />} />
            </Routes>
        </Router>

    )
}

export default RoutesUsers