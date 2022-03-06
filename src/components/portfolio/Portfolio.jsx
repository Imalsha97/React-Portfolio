import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.webp';
// import IMG1 from '../../assets/portfolio1.webp';
// import IMG2 from '../../assets/portfolio2.webp';
// import IMG3 from '../../assets/portfolio3.webp';

const data =  [
  {
    id : 1,
    image: IMG1,
    title : 'Library Management System',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
  {
    id : 2,
    image: IMG2,
    title : 'School Management System',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
  {
    id : 3,
    image: IMG3,
    title : 'Abhaya Welfare Foundation',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
  {
    id : 4,
    image: IMG1,
    title : 'SpringBoot Project ',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
  {
    id : 5,
    image: IMG2,
    title : 'App for the Fishermen',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
  {
    id : 6,
    image: IMG3,
    title : 'Library Management System',
    github:'https://github.com',
    demo :'https://cdn.dribbble.com/users/6100873/screenshots/17649814/media/e3657fbac1b4ab6127cfcccb56e2a7ab.png'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> */}
      </div>


    </section>
  )
}

export default Portfolio