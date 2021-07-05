import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-white mb-0" >
      <div className="container">
        <h1 className="display-1">My Travel Log</h1>
        <p className="lead">
          Oh the places you <em>did</em> go!
        </p>
      </div>
    </div>
  );
}

export default Header;
