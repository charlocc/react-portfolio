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
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#011E3D',
  },
  cardImage: {
    position: 'relative',
    margin: '1%',
    width: '98%',
    borderRadius: '9px',
    border: '2px solid #fcfaf2',
    alignSelf: 'center',
  },
  link: {
    textDecoration: 'none'
  }
}



function Project(props) {
  return (
    <div style={styles.card}>
      <a target="_blank" rel="noreferrer" href={props.url} style={styles.link}>
        <div>
          <h3 style={styles.cardHeader}>{props.title}</h3>
        </div>
        <div style={styles.cardHeader}>
          <div>{props.description}</div>
          <img style={styles.cardImage} src={props.imageSrc} alt={props.imageAlt} />
        </div>
      </a>
      <a target="_blank" rel="noreferrer" href={props.repo} style={styles.cardBody} >Link to Github Repo</a>
    </div>
  );
}



export default Project;

