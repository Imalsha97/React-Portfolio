import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/imalsha-madushani-1b9845192/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Imalsha97" target="_blank"><FaGithub/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial