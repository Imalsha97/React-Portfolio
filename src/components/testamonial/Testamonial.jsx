import React from 'react';
import './testamonial.css';
import AVTR1 from '../../assets/ava.jpg';
import AVTR2 from '../../assets/ava1.jpg';
import AVTR3 from '../../assets/ava4.jpg';
import AVTR4 from '../../assets/ava5.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar : AVTR1,
    name : 'Jone Mash',
    review : 'The peacock is the national bird of India. They have colourful feathers, two legs and a small beak. They are famous for their dance. When a peacock dances it spreads its feathers like a fan. It has a long shiny dark blue neck. Peacocks are mostly found in the fields they are '
  },
  {
    avatar : AVTR2,
    name : 'Marry Jemies',
    review : 'The peacock is the national bird of India. They have colourful feathers, two legs and a small beak. They are famous for their dance. When a peacock dances it spreads its feathers like a fan. It has a long shiny dark blue neck. Peacocks are mostly found in the fields they are '
  },
  {
    avatar : AVTR3,
    name : 'Soe Paul',
    review : 'The peacock is the national bird of India. They have colourful feathers, two legs and a small beak. They are famous for their dance. When a peacock dances it spreads its feathers like a fan. It has a long shiny dark blue neck. Peacocks are mostly found in the fields they are '
  },
  {
    avatar : AVTR4,
    name : 'Anith Singh',
    review : 'The peacock is the national bird of India. They have colourful feathers, two legs and a small beak. They are famous for their dance. When a peacock dances it spreads its feathers like a fan. It has a long shiny dark blue neck. Peacocks are mostly found in the fields they are '
  },
]

const Testamonial = () => {
  return (
    <section id ="testamonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return (
          <SwiperSlide key={index}  className='testimonial'>
          <div className="client__avatar">
          <img src={avatar} alt="Avatar one" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
        {/* <article className='testimonial'>
          <div className="client__avatar">
          <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Jonh Mash</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum hic tempore, nulla
             ratione nihil molestias veniam
             magnam rem, libero ab aliquam ipsam! Molestias pariatur aperiam at voluptatum deleniti. Vitae, praesentium!  
          </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
          <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Jonh Mash</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum hic tempore, nulla
             ratione nihil molestias veniam
             magnam rem, libero ab aliquam ipsam! Molestias pariatur aperiam at voluptatum deleniti. Vitae, praesentium!  
          </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
          <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Jonh Mash</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum hic tempore, nulla
             ratione nihil molestias veniam
             magnam rem, libero ab aliquam ipsam! Molestias pariatur aperiam at voluptatum deleniti. Vitae, praesentium!  
          </small>
        </article> */}
        
      </Swiper>
      </section>
  )
}

export default Testamonial