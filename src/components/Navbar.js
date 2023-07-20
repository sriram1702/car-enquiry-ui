import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <span>Hello, {user.name}</span>
            </li>
            <li>
              <button onClick={() => logout()}>Logout</button>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <li>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
