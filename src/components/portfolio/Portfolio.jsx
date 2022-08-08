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
    technologies: 'React, Nodejs, MongoDB, Express',
    github:'https://github.com/Imalsha97/SPARK_LMS_MERN.git',
    demo :'https://lms-frontend-e4d56.web.app/dashboard'
  },
  {
    id : 2,
    image: IMG2,
    title : 'Abhaya Welfare Website',
    technologies: 'Html, Css, Bootstrap, php',
    github:'https://github.com/Imalsha97/Abaya-welfare.git',
    demo :'http://abhayawelfare.com/'
  },
  {
    id : 3,
    image: IMG3,
    title : 'Fitness Website',
    technologies: 'Html, Css, Bootstrap',
    github:'https://github.com/Imalsha97/fitness-web-page.git',
    demo :'https://fitness-web5.herokuapp.com/ '
  },
  {
    id : 4,
    image: IMG1,
    title : 'Portfolio Website ',
    technologies: 'Html, Css, Bootstrap',
    github:'https://github.com/Imalsha97/portpolio2.git',
    demo :'https://imalsha10.herokuapp.com/'
  },
  {
    id : 5,
    image: IMG2,
    title : 'App for the Fishermen',
    technologies: 'React Native,Node js, Postgressql',
    github:'https://github.com/Karadiya-fisheries',
    demo :'https://www.figma.com/file/CdqYTeDRzyXHdjW6YEPKLm/Open-Hack?node-id=0%3A1'
  },
  {
    id : 6,
    image: IMG3,
    title : 'School Management System',
    technologies: 'Java, GUI, JavaFx',
    github:'https://github.com/Imalsha97/javaSchool-Management.git',
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
          data.map(({id,technologies,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <h4>{technologies}</h4>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Hosted Link</a>
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