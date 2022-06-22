import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx';
// import styles from './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
