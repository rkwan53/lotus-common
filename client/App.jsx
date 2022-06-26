import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Quote from './components/Quote.jsx';
import './App.css';


export default function App() {
  return (
    <>
      <div className="page">
        <div className="app">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="savedQuotes" element={<Quote />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </>
  );
}
