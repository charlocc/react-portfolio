import React from 'react';
// import '../styles/Navbar.css';


const styles = {
  navigation: {
    background: '#97B8C2',
    fontSize: '25px',
    color: '#011E3D',
    justifyContent: 'space-around',
    width: '100%'
  },
  text: {
    background: '#97B8C2',
    fontSize: '25px',
    color: '#011E3D',
  }
};


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="navbar-collapse" style={styles.navigation}>
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item">
            <a className="nav-link" style={styles.text} href="#aboutme">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={styles.text} href="#mywork">My Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={styles.text} href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={styles.text} href="#resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}



export default Navbar;