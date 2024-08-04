// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading'; // Import the Loading component
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Display the loading screen for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? <Loading /> : (
                <>
                    <Header />
                    <Home />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;


