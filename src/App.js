import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import { db } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const App = () => {
    // const [files, setFiles] = useState();

    // useEffect(() => {
    //     const get = async () => {
    //         const dbRef = ref(db, 'Banner superior Op.1.mp4');
    //         const url = await getDownloadURL(dbRef);
    //         setFiles(url);
    //     };
    //     get();
    // }, []);
    // video={files}

    return (
        <div className="container" id="app">
            <Header  />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
