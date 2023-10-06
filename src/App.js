import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mouse from "./components/Mouse";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";
function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // window.addEventListener("load", () => {
            setTimeout(() => setLoading(false), 4000);
        // });
    });
    return (
        <div className="App">
            <Mouse />
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                    >
                        <Loader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <>
                            <Toaster position="bottom-center" />
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="*" element={<Home />} />
                                    <Route path="/About" element={<About />} />
                                    <Route
                                        path="/Portfolio"
                                        element={<Portfolio />}
                                    />
                                    <Route
                                        path="/Contact"
                                        element={<Contact />}
                                    />
                                </Routes>
                            </BrowserRouter>
                        </>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
