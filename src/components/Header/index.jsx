import React, { useEffect } from "react"
import { FiX } from "react-icons/fi"
import Scrollspy from "react-scrollspy"
import {
  FaGitlab,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'

import avatar1 from '../../assets/images/about/avatar2.png'
import usIcon from '../../assets/images/icons/us.webp'
import brIcon from '../../assets/images/icons/br.webp'

const socialShare = [
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/lucas-padilhax' },
  { Social: <FaGithub />, link: 'https://github.com/padilhaalucas' },
  { Social: <FaGitlab />, link: 'https://gitlab.com/_lucaspadilha' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/_lucaspadilha' },
]

const Header = ({
  color = 'default-color',
  translate = () => {},
  homeLink
}) => {

  // const menuTrigger = () => document.querySelector(".header-wrapper").classList.toggle("menu-open")
  const closeMenuTrigger = () => document.querySelector(".header-wrapper").classList.remove("menu-open")

  const isDesktop = window.matchMedia('screen and (min-width: 1296px)').matches
  const siteLanguage = JSON.parse(localStorage.getItem('locale'))
  const isTranslated = siteLanguage.name === 'pt-BR'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector(".header--fixed").classList

      return window.scrollY > 100 ? 
        header.add("fill-navbar") : header.remove("fill-navbar")
    })

    let elements = document.querySelectorAll(".has-dropdown > a")
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active")

          this.classList.toggle("open")
        }
      }
    }
  }, [])
  
  const logoUrl = (
    <img 
      style={{
        width: isDesktop ? '80px' : '55px',
        height: isDesktop ? '80px' : '55px',
        opacity: 0.8,
        transform: 
          isTranslated ?
          `translate(${isDesktop ? '-20px' : '-13px'}) scaleX(-1)` :
          `translate(0px) translate(${isDesktop ? '20px' : '22px'}) scaleX(1)`
      }}
      src={avatar1} 
      alt="Ghost"
    />
  )

  return (
    <header id="header" className={`header-area header-style-two header--fixed sticky ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>
              {logoUrl}
            </a>
            <div className="header-center">
              <img
                src={brIcon}
                onClick={() => translate('BR')}
                style={{
                  marginRight: isDesktop ? '0' : '5px',
                  width: '30px',
                  height: '30px',
                  opacity: isTranslated ? 1 : 0.25
                }}
                alt={'Brazil flag, meaning brazilian portuguese translation.'}
              />
              <img
                src={usIcon}
                onClick={() => translate('US')}
                style={{
                  width: '30px',
                  height: '30px',
                  opacity: isTranslated ? 0.25 : 1
                }}
                alt={'USA flag, meaning american english translation.'}
              />
            </div>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className="mainmenu"
              items={[
                "home",
                "about",
                "service",
                "portfolio",
                "contact",
              ]}
              currentClassName="is-current"
              offset={-200}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right" style={{width: 'auto'}}>
          <div className="header-btn gradient" style={{width: 'auto'}}>
            <a className="rn-btn" href="https://ko-fi.com/padilha" target={'_blank'} rel='noreferrer' style={{width: 'auto'}}>
              <span style={{ color: 'white' }}>{isTranslated ? 'Pagar um': 'Buy me a'} </span>
              <span style={{ fontSize: '20px', width: 'auto'}}>☕️</span>
            </a>
          </div>

          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {socialShare.map((val, i) => (
                <li key={i}>
                  <a
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    href={val.link}
                    target={'_blank'}
                    rel="noreferrer"  
                  >{val.Social}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Start Hamburger Menu  */}
          {/* <div className="hamburguer-menu d-block d-xl-none pl-0 mb-lg-5">
            <span
              onClick={menuTrigger}
              className="menutrigger text-white"
            >
              <FiMenu />
            </span>
          </div> */}
          {/* End Hamburger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
