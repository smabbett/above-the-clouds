import React from 'react';
import headerImage from '../images/airplane-june112020.jpg';

const style = {
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
  backgroundPosition: 'center',
  backgroundSize: '100% auto',
};

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-white mb-0" style={style}>
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
