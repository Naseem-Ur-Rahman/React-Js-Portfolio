import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
     

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Html</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Css</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Javascripit</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Material Ui</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End Of FrontEnd */}

        <div className="experience__frontend">
        <h3>BackEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' />
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons' /> 
              <div>
              <h4>Django</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons'/>
              <div>
              <h4>Php</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons'/>
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className ='experience__details-icons'/>
              <div>
              <h4>Express js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          
        </div>
      </div>
    </section >
  )
}

export default Experience
