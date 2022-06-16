import React from 'react';

import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

const App = (/* { hideLoader } */) => {
    // useEffect(hideLoader, []);

    return (
        <div className="container" id="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
