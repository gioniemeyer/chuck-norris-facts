import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";

import '../styles/reset.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}