import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 
    render() { 
        return (
          <nav className="navbar bg-light">
              <a class="navbar-brand" href="#">
                 Navbar{" "}
                 <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                 </span>
              </a>
          </nav>
        );
    }
}
 
export default NavBar;