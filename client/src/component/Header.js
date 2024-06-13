import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="left brand-logo">
              Emaily
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a>Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
