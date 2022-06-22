import React from 'react';
import { Outlet, Link } from 'react-router-dom'
export default function Navbar() {


  return (
    <>
      <nav className="navbar">
        <span>
          <Link to="/">Home</Link>
        </span>

        <span>
          <Link to="/savedquotes">Saved Quotes</Link>
        </span>
      </nav>

      <Outlet />
    </>
  );
}
