import React from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import Logo from "../img/01E50931-FD32-4C0C-B1F3-21E87821B074.png"
import {useContext} from 'react'

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
  
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/?cat=home">
              <h6>HOME</h6>
            </Link>
            <Link className="link" to="/?cat=relationships">
              <h6>RELATIONSHIPS</h6>
            </Link>
            <Link className="link" to="/?cat=datenight">
              <h6>DATE NIGHT</h6>
            </Link>
            <Link className="link" to="/?cat=wordonthestreet">
              <h6>WORD ON THE STREET</h6>
            </Link>
            <Link className="link" to="/?cat=playathome">
              <h6>PLAY AT HOME</h6>
            </Link>
            <Link className="link" to="/?cat=pigeonpost">
              <h6>PIGEON POST</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {currentUser ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;