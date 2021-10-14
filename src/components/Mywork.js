import React from 'react';
// import '../styles/Header.css';
import Project from './Project';

const works = [
  {
    title: 'Coding Quiz',
    description: 'this is a quiz',
    imageSrc: './images/codingquiz.png',
    imageAlt: 'Coding quiz site',
    url: 'https://charlocc.github.io/codingquiz/',
    id: 1
  },
  {
    title: '#bigtechblog',
    description: 'this is a blog',
    imageSrc: './images/bigtechblog.png',
    imageAlt: '#bigtechblog site',
    url: 'https://radiant-ocean-47580.herokuapp.com/',
    id: 2
  },
  {
    title: 'sweet apples',
    description: 'this is a review site',
    imageSrc: './images/sweetapples.png',
    imageAlt: 'sweet apples site',
    url: 'https://ancient-plains-02897.herokuapp.com/',
    id: 3
  },
  {
    title: 'workday scheduler',
    description: 'this is a schedule maker',
    imageSrc: './images/workdayscheduler.png',
    imageAlt: 'workday scheduler site',
    url: 'https://charlocc.github.io/workdayscheduler/',
    id: 4
  },
  {
    title: 'discover america',
    description: 'find national parks in your state',
    imageSrc: './images/discoveramerica.png',
    imageAlt: 'discover america site',
    id: 5,
    url: 'https://charlocc.github.io/activityplanner/'
  },
]


function Mywork() {
  return (
    <div className='container'>
      <section className='row'>

        <div className='col-lg-3 col-md-12 col-sm-12'>
          <h2 id='mywork'>My Work</h2>
        </div>
        <div className='col-lg-9 col-md-12 row'>
            {works.map((work) => (
              <Project title={work.title} description={work.description} key={work.id} imageSrc={work.imageSrc} imageAlt={work.imageAlt} url={work.url}/>
            ))}
        </div>

      </section>
    </div>
  );
}

export default Mywork;