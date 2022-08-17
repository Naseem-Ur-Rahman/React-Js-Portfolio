import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNavLink , setActiveNavLink] = useState('#');
  return (
    <nav>
      <a href="" className={activeNavLink === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNavLink('#about')} className={activeNavLink === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveNavLink('#experience')} className={activeNavLink === '#experience' ? 'active' : ''}> <BiBook/> </a>
      <a href="#services" onClick={() => setActiveNavLink('#services')} className={activeNavLink === '#services' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href="#contact" onClick={() => setActiveNavLink('#contact')} className={activeNavLink === '#contact' ? 'active' : ''}> <BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav
