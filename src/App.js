import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Bts from "./pages/Bts";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mouse from "./components/Mouse";
import { Toaster } from "react-hot-toast";
import Epreuves from "./pages/Epreuves";
import Veilles from "./pages/Veilles";
function App() {
    return (
        <div className="App">
            <Mouse />
            <Toaster position="bottom-center"/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Bts-sio" element={<Bts />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Epreuves" element={<Epreuves />} />
                    <Route path="/Veilles" element={<Veilles />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;