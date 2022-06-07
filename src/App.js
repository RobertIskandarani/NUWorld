import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <div className="container" id="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
