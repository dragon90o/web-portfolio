import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components'; // Importa BrowserRouter
import { SignUp, SignIn, DravvtPage } from './pages';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<DravvtPage />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/tasks" element={<DravvtPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
