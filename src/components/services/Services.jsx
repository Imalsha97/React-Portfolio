import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Did</h5>
      <h2>Competencies</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
              <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Completed Foundation of User Experience (UX) Design course by Google.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Benchmark  UI/UX Hackathon - Selected for top 10 (By Aiesec in SLIT)</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Participated RevolUX(1.0)  by AIESEC in University of Colombo</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Participated Esthetique 21 by FOSS Community of NSBM</p>
              </li>
              
              
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
              <h3>Hackathons </h3>
          </div>
          <ul className='service__list'>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Open hack - Selected for top 10 teams (By IIT University)</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>ICS Inter-University CtF competition(2.0)- Selected for top 10 (By  ISACA Student Group of UCSC-2022)</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>ICS Inter-University CtF competition(2.0)- Selected for top 15 (By  ISACA Student Group of UCSC-2021)</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Reply code challenge -Hackathon - 634th place in the world rankings(2021)</p>
              </li>
              
              
          </ul>
        </article>
        {/* END OF WEB Development */}
        <article className='service'>
          <div className="service__head">
              <h3>Responsibilities
</h3>
          </div>
          <ul className='service__list'>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Vice President - IEEE Computer Society  University of Ruhuna.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>INSL Provincial Coordinator and University Representative - IEEE Innovation Nation Sri Lanka</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Main Coordinator and event Planner - Computer Science Students' Community of the University of Ruhuna. </p>
              </li>
              {/* <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
              </li> */}
              
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  )
}

export default Services