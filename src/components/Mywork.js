import React from 'react';
// import '../styles/Header.css';
import Project from './Project';

const works = [
  {
    title: 'coding quiz',
    description: 'test your (and your friends) knowledge of javascript with this quiz!',
    imageSrc: './images/codingquiz.png',
    imageAlt: 'Coding quiz site',
    url: 'https://charlocc.github.io/codingquiz/',
    id: 1,
    repo: 'https://github.com/charlocc/codingquiz'
  },
  {
    title: '#bigtechblog',
    description: 'post reviews or your favorite tech, and see what other people think!',
    imageSrc: './images/bigtechblog.png',
    imageAlt: '#bigtechblog site',
    url: 'https://radiant-ocean-47580.herokuapp.com/',
    id: 2,
    repo: 'https://github.com/charlocc/tech-blog'
  },
  {
    title: 'sweet apples',
    description: 'leave reviews of your favorite (or least favorite) video games!',
    imageSrc: './images/sweetapples.png',
    imageAlt: 'sweet apples site',
    url: 'https://ancient-plains-02897.herokuapp.com/',
    id: 3,
    repo: 'https://github.com/charlocc/sweet-apples'
  },
  {
    title: 'scheduler',
    description: 'plan out your busy work day from 9 to 5 using thius work day scheduler!',
    imageSrc: './images/workdayscheduler.png',
    imageAlt: 'workday scheduler site',
    url: 'https://charlocc.github.io/workdayscheduler/',
    id: 4,
    repo: 'https://github.com/charlocc/workdayscheduler'
  },
  {
    title: 'discover america',
    description: 'find national parks and campgrounds in your state, and save your favorites',
    imageSrc: './images/discoveramerica.png',
    imageAlt: 'discover america site',
    id: 5,
    url: 'https://charlocc.github.io/activityplanner/',
    repo: 'https://github.com/charlocc/activityplanner'
  },
]

const styles = {
  margin: {
    margin: '2%',
  }
}

function Mywork() {
  return (
    <div className='container' style={styles.margin}>
      <section className='row'>

        <div className='col-lg-3 col-md-12 col-sm-12'>
          <h2 id='mywork'>My Work</h2>
        </div>
        <div className='col-lg-9 col-md-12 row'>
            {works.map((work) => (
              <Project title={work.title} description={work.description} key={work.id} imageSrc={work.imageSrc} imageAlt={work.imageAlt} url={work.url} repo={work.repo}/>
            ))}
        </div>

      </section>
    </div>
  );
}

export default Mywork;