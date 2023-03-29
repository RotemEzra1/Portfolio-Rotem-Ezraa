import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrFacebook} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/rotem-ezra-419274197/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/RotemEzra1' target="_blank"><FaGithub /></a>
        <a href='https://www.facebook.com/rotem.ezra.7/' target="_blank"><GrFacebook /></a>
    </div>
  )
}

export default HeaderSocials