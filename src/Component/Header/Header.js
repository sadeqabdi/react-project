import React, { Component } from 'react';
import './Header.css'; 
import Search from '../../Component/Search/Search';
import Login from '../../Component/Login/Login'

class Header extends Component {
  render() {
    return (
      <div className="App">
      <header className="Header-header">
        <span className="Header-login">Login</span>
        <Search />
      </header>
      <Login />
      </div>
    );
  }
}

export default Header;