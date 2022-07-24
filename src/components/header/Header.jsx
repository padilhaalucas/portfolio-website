import React, { useState, useEffect } from "react"
import { FiX, FiMenu } from "react-icons/fi"
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
  { Social: <FaGithub />, link: 'https://github.com/padilhalucas' },
  { Social: <FaGitlab />, link: 'https://gitlab.com/_lucaspadilha' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/_lucaspadilha' },
]

const Header = ({
  color = 'default-color',
  translate = () => {},
  homeLink
}) => {

  const menuTrigger = () => document.querySelector(".header-wrapper").classList.toggle("menu-open")
  const closeMenuTrigger = () => document.querySelector(".header-wrapper").classList.remove("menu-open")

  const siteLanguage = JSON.parse(localStorage.getItem('locale'))
  const isTranslated = siteLanguage.name === 'pt-BR'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector(".header--fixed").classList

      return window.scrollY > 100 ? 
        header.add("fill-navbar") 
        :
        header.remove("fill-navbar")
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
  }, [window.scrollY])
  
  const logoUrl = (
    <img 
      style={{
        width: "80px",
        height: '80px',
        opacity: 0.8,
        transform: isTranslated ? 'translate(-20px) scaleX(-1)' : 'translate(0px) translate(20px) scaleX(1)'
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
                  width: '30px',
                  height: '30px',
                  opacity: isTranslated ? 1 : 0.25
                }}
              />
              <img
                src={usIcon}
                onClick={() => translate('US')}
                style={{
                  width: '30px',
                  height: '30px',
                  opacity: isTranslated ? 0.25 : 1
                }}
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
                "blog",
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
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {socialShare.map((val, i) => (
                <li key={i}>
                  <a href={`${val.link}`}>{val.Social}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="header-btn">
            <a className="rn-btn" href="#contact">
              <span>Contact me</span>
            </a>
          </div> */}
          {/* Start Hamburger Menu  */}
          <div className="hamburger-menu d-block d-lg-none pl--20">
            <span
              onClick={menuTrigger}
              className="menutrigger text-white"
            >
              <FiMenu />
            </span>
          </div>
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
