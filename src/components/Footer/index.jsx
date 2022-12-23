import React from 'react'
import {
  FaGitlab,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'

import avatar1 from '../../assets/images/about/avatar2.png'

const socialShare = [
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/lucas-padilhax' },
  { Social: <FaGithub />, link: 'https://github.com/padilhalucas' },
  { Social: <FaGitlab />, link: 'https://gitlab.com/_lucaspadilha' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/_lucaspadilha' },
]

const Footer = () => {
  return (
    <div
      className='footer-style-2 ptb--30 bg_image bg_image--1'
      data-black-overlay='6'
    >
      <div className='wrapper plr--50 plr_sm--20'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='inner'>
              <div className='logo text-center text-sm-left mb_sm--20'>
                <a href='/home-one'>
                  <img
                    style={{ height: '120px' }}
                    src={avatar1}
                    alt='Logo images'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='inner text-center'>
              <ul className='social-share rn-lg-size d-flex justify-content-center liststyle'>
                {socialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`} target='_blank'>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <div className='inner text-lg-right text-center mt_md--20 mt_sm--20'>
              <div className='text'>
                <p>Lucas Padilha | 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
