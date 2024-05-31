import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const parent = document.getElementById('root');
console.log(parent);
const root = ReactDOM.createRoot(parent);

const App = () => {
    let path = window.location.pathname;
    return (
        <>
            <Navbar />
            {path === '/' && <HomePage />}
            {path === '/products' && <ProductPage />}
            {path === '/search' && <SearchPage />}
            <Footer />
        </>
    );
}

root.render(<App />);