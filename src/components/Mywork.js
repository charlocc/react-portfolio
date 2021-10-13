import React from 'react';
// import '../styles/Header.css';
import Project from './Project';

const works = [
  {
    title: 'Coding Quiz',
    description: 'this is a quiz',
    imageSrc: './images/codingquiz.png',
    imageAlt: 'Coding quiz site',
    id: 1
  },
  {
    title: '#bigtechblog',
    description: 'this is a blog',
    imageSrc: './images/bigtechblog.png',
    imageAlt: '#bigtechblog site',
    id: 2
  },
  {
    title: 'sweet apples',
    description: 'this is a review site',
    imageSrc: './images/sweetapples.png',
    imageAlt: 'sweet apples site',
    id: 3
  },
  {
    title: 'workday scheduler',
    description: 'this is a schedule maker',
    imageSrc: './images/workdayscheduler.png',
    imageAlt: 'workday scheduler site',
    id: 4
  },
]


function Mywork() {
  return (
    <div className='container'>
      <section className='row'>
        <div className='col-lg-4 col-md-12 col-sm-12'>
          <h2 id="mywork">My Work</h2>
        </div>
        <div className='col-lg-7 col-md-12 row'>
            {works.map((work) => (
              <Project title={work.title} description={work.description} key={work.id} imageSrc={work.imageSrc} imageAlt={work.imageAlt}/>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Mywork;