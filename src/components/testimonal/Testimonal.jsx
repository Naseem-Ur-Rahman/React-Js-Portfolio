import './testimonal.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data = [
  {
    id:1,
    clientImage:AVTR1,
     clientName:'Zarmina Khan',
     clientReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque sapiente impedit laboriosam earum, eligendi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim?'
  },

  {
    id:2,
    clientImage:AVTR2,
    clientName:'Rashid Khan',
    clientReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque sapiente impedit laboriosam earum, eligendi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim?'
 },

 {
  id:3,
  clientImage:AVTR3,
  clientName:'Muhammad Zakriya',
  clientReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque sapiente impedit laboriosam earum, eligendi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim?'
},

{
  id:4,
  clientImage:AVTR4,
  clientName:'Tooba Khan',
  clientReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque sapiente impedit laboriosam earum, eligendi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim?'
},
]

const Testimonal = () => {
  return (
    <section id='testimonials'>
      
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({id, clientImage, clientName, clientReview})=>{
            return (
              <SwiperSlide key = {id} className='testimonial'>
                <div className="client__avatar">
                  <img src={clientImage} alt="Avatar One" />
                </div>
             <h3 className='client__name'>{clientName}</h3>
              <small className='client__review'>
                  {clientReview}
              </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonal
