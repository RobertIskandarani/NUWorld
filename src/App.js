import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10000);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container" id="app">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
};

export default App;
