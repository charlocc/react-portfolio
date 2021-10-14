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
    borderBottom: '#011E3D solid 2px'
  }
}


function Header() {
  return (
    <section >
      <div style={styles.heading} className='row'>
        <div className='col-lg-4 col-sm-12'>
          <h2 >Charlotte Clark</h2>
        </div>
        <div className='col-lg-6 col-12-sm'>
          <Navigation />
        </div>
      </div>
    </section>
  );
}

export default Header;