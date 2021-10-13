import React from 'react';
// import '../styles/Navbar.css';

const styles = {
  card: {
    padding: '1%',
    backgroundColor: '#97B8C2',
    color: '#011E3D',
    borderColor: '#011E3D',
    border: 'solid 2px',
    borderRadius: '9px',
    margin: '2%',
    width: '45%',
  },
  cardHeader: {
    // position: relative;
    margin: '2%',
    padding: '3% 5% 2% 5%',
    backgroundColor: '#fcfaf2',
    color: '#011E3D',
    border: 'solid 2px #011E3D',
    textAlign: 'center',
    borderRadius: '9px'
  },
  cardBody: {
    display: 'block',
    margin: '2%',
    boxSizing: 'border-box'
  },
  cardImage: {
    position: 'relative',
    margin: '1%',
    width: '98%',
    borderRadius: '9px',
    border: '2px solid #fcfaf2',
    alignSelf: 'center',
  }
  // add media query for making the cards 100% width when small screen
  // add hover effect to the cards

}




function Project() {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.cardHeader}>Title of work</h3>
      </div>
      <div style={styles.cardHeader}>
        <div>Here is some more info about the work</div>
        <img style={styles.cardImage} src='./images/bigtechblog.png' alt="Charlotte Clark" />
      </div>
    </div>
  );
}



export default Project;

