import './about.css'
import ME from '../../assets/me-about.jpg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
          <img src={ME} alt="About Us" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Months Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Quia consequatur, animi esse aliquid recusandae 
              doloremque ad natus. Amet id quas libero hic dolorum 
              doloribus repellendus quo, doloremque, error, voluptas 
              qui itaque neque consequuntur nobis autem laboriosam 
              possimus eos! Accusantium, nobis?</p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
        </div>
     </div>
    </section>
  )
}

export default about
