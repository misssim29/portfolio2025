import React, { useEffect, useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'App.scss';
import Home from 'pages/Home';
import List from 'pages/List';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list/:id" element={<List />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
