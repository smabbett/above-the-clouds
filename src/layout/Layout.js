import React from 'react';
// import Menu from './Menu';
import Routes from './Routes';
import Header from './Header';

function Layout() {
  return (
    <div className="container-fluid">
      <Header />

      {/* <Menu /> */}

      <Routes />
    </div>
  );
}

export default Layout;
