import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main.jsx";
import Mint from "./components/Mint/Mint.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "./App.css";

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <div className="container" id="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/minting-page" element={<Mint />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ThirdwebProvider>
  );
};

export default App;
