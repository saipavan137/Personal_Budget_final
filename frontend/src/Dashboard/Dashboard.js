import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';

function Dashboard() {
  return (
    <div>
        <div class =" padding">
          <h2>Welcome to Personal Budget Management Application!</h2>
        </div>
        <Menu/>
    </div>
  );
}

export default Dashboard;
