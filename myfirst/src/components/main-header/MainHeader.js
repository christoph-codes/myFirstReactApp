import React from 'react';
import logo from '../../logo.svg';
import '../main-header/MainHeader.css'

function MainHeader() {
  return (
    <div className="MainHeader">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>This is the Main Header</h1>
    </div>
  );
}

export default MainHeader;