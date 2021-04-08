import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <section class='dash'>
      <div class=' profile-img'></div>
      <h1 class='large text-primary'>Dashboard</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Use these MBI techniques for better study
        management skills.
      </p>
      <div>
        <Link to='/planner' class='btn btn-light'>
          <i class='fas fa-user-circle text-primary'></i> Planner
        </Link>
        <Link to='/journal' class='btn btn-light'>
          <i class='fab fa-black-tie text-primary'></i> Journal
        </Link>
        <Link to='/workshop' class='btn btn-light'>
          <i class='fas fa-graduation-cap text-primary'></i> Workshop
        </Link>
      </div>
      <div class='recent'>
        <h1 class='large text-primary'>Recent Activity</h1>
      </div>
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
