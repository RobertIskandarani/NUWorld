import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const loadingPage = document.querySelector('.loading-page');
const loader = document.querySelector('.loader');

const changeProgress = progress => {
    loader.style.width = `${progress}%`;
};

setTimeout(() => changeProgress(22), 1000);
setTimeout(() => changeProgress(45), 2000);
setTimeout(() => changeProgress(85), 4600);
setTimeout(() => changeProgress(99.9), 5266);
setTimeout(() => changeProgress(100), 8000);

const showLoader = () => loadingPage.classList.remove('loader--hide');

const hideLoader = () => loadingPage.classList.add('loader--hide');

const root = ReactDOM.createRoot(document.getElementById('root'));
setTimeout(
    () =>
        root.render(
            <React.StrictMode>
                <App hideLoader={hideLoader} showLoader={showLoader} />
            </React.StrictMode>
        ),
    8000
);

root.render();
