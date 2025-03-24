import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-primary">
                <Header /> 
                <main className="flex-grow">
                    <div className="w-4/5 lg:w-3/5 mx-auto">
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/portfolio" element={<Portfolio />}/>
                            <Route path="/contact" element={<Contact />}/>
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App