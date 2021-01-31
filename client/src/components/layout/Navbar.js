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
                <a href='#home'>Napier Logo</a>
              </h1>
            </span>
            <button id='menu' className='btn-nav'>
              <span className='fas fa-bars'></span>
            </button>
          </div>
          <div className='nav right'>
            <Link to='/' className='nav-link active'>
              <span className='nav-link-span'>
                <span className='u-nav'>Home</span>
              </span>
            </Link>
            <Link to='/planner' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>myPlanner</span>
              </span>
            </Link>
            <Link to='/journal' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>myJournal</span>
              </span>
            </Link>
            <Link to='/community' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>Community Board</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
