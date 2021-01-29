import React from 'react';

const Landing = () => {
  return (
    <div>
      <header id='nav-wrapper'>
        <nav id='nav'>
          <div className='nav left'>
            <span className='gradient skew'>
              <h1 className='logo un-skew'>
                <a href='#home'>Logo Here</a>
              </h1>
            </span>
            <button id='menu' className='btn-nav'>
              <span className='fas fa-bars'></span>
            </button>
          </div>
          <div className='nav right'>
            <a href='#home' className='nav-link active'>
              <span className='nav-link-span'>
                <span className='u-nav'>Home</span>
              </span>
            </a>
            <a href='#about' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>About</span>
              </span>
            </a>
            <a href='#work' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>Work</span>
              </span>
            </a>
            <a href='#contact' className='nav-link'>
              <span className='nav-link-span'>
                <span className='u-nav'>Contact</span>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Landing;
