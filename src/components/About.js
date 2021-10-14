import React from 'react';

const styles = {
    picture: {
        padding: '3%',
        margin: '3px',
        height: '75%',
        border: '#011E3D solid 2px',
        backgroundColor: '#97B8C2',
        borderRadius: '9px'
    },
    text: {
        margin: '3px',
        backgroundColor: '#97B8C2',
        padding: '3%',
        borderRadius: '5px',
        border: 'solid #011E3D 2px'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        // flexDirection: 'row',
        padding: '2%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    margin: {
        marginRight: '5%'
    }
}

export default function About() {
    return (
        <div className='container'>
            <section className='row'>
                <div className='col-12'>
                    <h2 id="aboutme">About Me</h2>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-12' style={styles.text}>
                    <p> I graduated from the University of Southern California in 2020 with a degree in International
                        Relations, and a minor in French. I worked as a senior therapist for children with developmental
                        disabilites from 2019-2021,
                        and I am currently enrolled in a full-stack coding bootcamp at UCLA.</p>
                    <div>
                        <ul className="row">Proficient in:
                            <div style={styles.list}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Mysql2</li>
                                <li>Sequelize.js</li>
                                <li>bcrypt</li>
                                <li>Heroku</li>
                                <li>Handlebars.js</li>
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