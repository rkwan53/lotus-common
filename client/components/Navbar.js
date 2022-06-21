import React, { Outlet, Link } from 'react';

export default function Navbar() {
  
  
  return (
    <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/savedquotes">Saved Quotes</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
      )
    </div>
  );
}
