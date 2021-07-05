import React from 'react';
import Routes from './Routes';
import Header from './Header';

function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes />
    </div>
  );
}

export default Layout;
