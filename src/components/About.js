import React from 'react';

export default function About() {
  return (
    <div className='container'>
      <section className='row'>
            <div className='col-12'>
                <h2 id="aboutme">About Me</h2>
            </div>
                <div className='col-lg-8 col-md-6 col-sm-12'>
                    <p> I graduated from the University of Southern California in 2020 with a degree in International
                        Relations, and a minor in French. I worked as a senior therapist for children with developmental
                        disabilites from 2019-2021,
                        and I am currently enrolled in a full-stack coding bootcamp at UCLA.</p>
                    <div>
                        <ul>Proficient in:
                            <div>
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
            <img className='col-lg-3 col-md-5 col-sm-12' src='./images/charlotte2.jpg'
                alt="picture of charlotte"/>
        </section>
    </div>
  );
}