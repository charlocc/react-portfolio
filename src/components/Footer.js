import React from 'react';


const styles = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1%',
    paddingTop: '2%',
    background: '#97B8C2',
    color: '#011E3D',
    borderTop: '#011E3D solid 2px'
  }
}


function Footer() {
  return (
    <section >
      <div style={styles.footer}>
        <div>
          <h2 >Charlotte Clark</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;