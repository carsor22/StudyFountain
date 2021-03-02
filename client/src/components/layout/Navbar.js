import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header idname='nav-wrapper'>
        <nav className='nav'>
          <div className='nav left'>
            <span className='gradient skew'>
              <h1 className='logo un-skew'>
                <Link to='/'>App name</Link>
              </h1>
            </span>
            <button id='menu' className='btn-nav'>
              <span className='fas fa-bars'></span>
            </button>
          </div>
          <div className='nav right'>
            <Link to='/register' className='nav-link active'>
              <span className='nav-link-span'>
                <span className='u-nav'>Register</span>
              </span>
            </Link>
            <Link to='/login' className='nav-link active'>
              <span className='nav-link-span'>
                <span className='u-nav'>Login</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
