import React from 'react';

const styles = {
    picture: {
        padding: '3%',
        margin: '3px',
        height: '85%',
        border: '#011E3D solid 2px',
        backgroundColor: '#97B8C2',
        borderRadius: '9px'
    },
    text: {
        margin: '3px',
        backgroundColor: '#97B8C2',
        padding: '2%',
        borderRadius: '5px',
        border: 'solid #011E3D 2px'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        listStyleType: "none",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    margin: {
        marginRight: '3%'
    },
    ul: {
        display: "flex",
    },
    lang: {
        margin: '5px',
        marginRight: '5px'
    }
}

export default function About() {
    return (
        <div className='container'>
            <section className='row'>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                    <h2 id="aboutme">About Me</h2>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12' style={styles.text}>
                    <p> I graduated from the University of Southern California in 2020 with a degree in International
                        Relations, and a minor in French. I worked as a senior therapist for children with developmental
                        disabilites from 2019-2021,
                        and I am currently enrolled in a full-stack coding bootcamp at UCLA.</p>
                    <div>
                    <p>Proficient in: </p>
                        <ul className="ul">
                            <div style={styles.list}>
                                <li style={styles.lang}>HTML</li>
                                <li style={styles.lang}>CSS</li>
                                <li style={styles.lang}>JavaScript</li>
                                <li style={styles.lang}>Node.js</li>
                                <li style={styles.lang}>Express.js</li>
                                <li style={styles.lang}>Mysql2</li>
                                <li style={styles.lang}>Sequelize.js</li>
                                <li style={styles.lang}>bcrypt</li>
                                <li style={styles.lang}>Heroku</li>
                                <li style={styles.lang}>Handlebars.js</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-5 col-sm-12' style={styles.margin}>
                    <img style={styles.picture} src='./images/charlotte2.jpg' alt="picture of charlotte" />
                </div>
            </section>
        </div>
    );
}