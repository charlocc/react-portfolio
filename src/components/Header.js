import React from 'react';
// import '../styles/Header.css';
import Navigation from './Navigation';

const styles = {
  heading: {
    display: 'flex',
    background: '#97B8C2',
    fontSize: '34px',
    color: '#011E3D',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}


function Header() {
  return (
      <section className='row'>
        <div style={styles.heading}>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <h2 >Charlotte Clark</h2>
          </div>
          <div className='col-lg-7 col-md-12'>
            <Navigation />
          </div>
        </div>
      </section>
  );
}

export default Header;