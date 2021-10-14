import React from 'react';

const styles = {
    list: {
      display: 'flex',
      justifyContent: 'space-around',
      listStyleType: 'none',
      backgroundColor: '#97B8C2',
      border: '#011E3D solid 2px',
      margin: 'auto',
      padding: '20px 20px',
    },
    link: {
        textDecoration: 'none',
        color: '#011E3D'
    }
  }

function Contact() {
    return (
      <div className='container'>
        <section className='row'>
          <div className='col-lg-3 col-md-12 col-sm-12'>
            <h2 id='contact'>Contact</h2>
          </div>
          <div className='col-lg-9 col-md-12 row'>
            <ul style={styles.list}>
                <li><a style={styles.link} href="mailto:charlotte.clark@alumni.usc.edu">Email</a></li>
                <li><a style={styles.link} href="https://www.linkedin.com/in/charlotte-clark-ba486213a/">LinkedIn</a></li>
                <li><a style={styles.link} href="https://github.com/charlocc">Github</a></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;