import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='nav right'>
      <a onClick={logout} href='#!'>
        Logout
      </a>
      <span className='nav-link active '></span>
      <Link to='/dashboard' className='nav-link active'>
        <span className='nav-link-span'>
          <span className='u-nav'>Dashboard</span>
        </span>
      </Link>
      <Link to='/planner' className='nav-link active'>
        <span className='nav-link-span'>
          <span className='u-nav'>myPlanner</span>
        </span>
      </Link>
      <Link to='/journal' className='nav-link active'>
        <span className='nav-link-span'>
          <span className='u-nav'>myJournal</span>
        </span>
      </Link>
      <Link to='/workshop' className='nav-link active'>
        <span className='nav-link-span'>
          <span className='u-nav'>myWorkshop</span>
        </span>
      </Link>
    </div>
  );

  const guestLinks = (
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
  );

  return (
    <div>
      <header idname='nav-wrapper'>
        <nav className='nav'>
          <div className='nav left'>
            <span className='gradient skew'>
              <h1 className='logo un-skew'>
                <Link to='/'>Study Fountain</Link>
              </h1>
            </span>
            <button id='menu' className='btn-nav'>
              <span className='fas fa-bars'>Study Fountain</span>
            </button>
          </div>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </nav>
      </header>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
