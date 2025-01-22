import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App