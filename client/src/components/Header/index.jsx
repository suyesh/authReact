import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <Fragment>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign out</Link>
        <Link to="/feature">Feature</Link>
      </Fragment>
    );
  }
}

export default Header;
