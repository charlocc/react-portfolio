import React from 'react';
// import '../styles/Navbar.css';


const styles = {
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    listStyleType: 'none'
  },
  text: {
    fontSize: '20px',
    color: '#011E3D',
    textDecoration: 'none',

  }
};



function Navbar() {
  return (
    <nav className='container'>
      <div className='row'>
        <ul style={styles.navigation}>
          <li>
            <a  style={styles.text} href="#aboutme">About Me</a>
          </li>
          <li>
            <a  style={styles.text} href="#mywork">My Work</a>
          </li>
          <li >
            <a  style={styles.text} href="#contact">Contact</a>
          </li>
          <li >
            <a  style={styles.text} href="#contact">Resume</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}





export default Navbar;