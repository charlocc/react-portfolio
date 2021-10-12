import React from 'react';
// import '../styles/Header.css';
import Project from './Project';

const styles = {
  work: {
    
  }
}


function Header() {
  return (
    <div className='container'>
      <section className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <h2>My Work</h2>
          </div>
          <div className='col-lg-7 col-md-12'>
            <Project />
          </div>
      </section>
    </div>
  );
}

export default Header;