import React, {
  useCallback,
  useReducer,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react'

import TextLoop from 'react-text-loop'
import Particles from 'react-particles-js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/all'

import AboutMe from './components/AboutMe'
import Helmet from './components/Common/Helmet'
import Loader from './components/Common/Loader'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import PortfolioList from './components/Portfolio'
import ServiceList from './components/ServiceList'

import lucasPhoto from './assets/images/about/lucas1.png'
import myPDF from './assets/lucasPadilha2022.pdf'

import us from './locales/en-US.json'
import br from './locales/pt-BR.json'

const PortfolioLanding = () => {
  const [isLoading, setIsLoading] = useState(true)

  const initialState = { current: us, name: 'en-US' }

  const reducer = (state, action) => {
    switch (action.type) {
      case "TRANSLATE_BR":
        return ({ current: br, name: 'pt-BR' })
      case "TRANSLATE_US":
        return ({ current: us, name: 'en-US' })
      default:
        return state;
      }
  }

  const [locale, dispatch] = useReducer(reducer, initialState)
  
  const translate = (lang) => dispatch({ type: `TRANSLATE_${lang}` })

  const siteLanguage = useMemo(() => {
    localStorage.removeItem('locale')
    localStorage.setItem('locale', JSON.stringify(locale))

    return JSON.parse(localStorage.getItem('locale'))
  }, [locale])

  const slideList = useMemo(() => [
    {
      textPosition: 'text-left',
      textAboveHeadline: siteLanguage.current.welcome.dynamicText,
      description: '',
      buttonText: '',
      buttonLink: '',
    },
  ], [siteLanguage])

  const [particlesOpacity, setParticlesOpacity] = useState(1)

  const avatarRef = useRef()
  
  const isDesktop = window.matchMedia('screen and (min-width: 1296px)').matches
  
  useEffect(() => {
    window.onscroll = () => {
      if (!isLoading) {
        setParticlesOpacity(window.scrollY >= 320 ? 0 : 1)
      }
    }

  }, [window.scrollY, isLoading])

  useEffect(() => {
    if (!isLoading) {
      // Items that will be animated
      let lucasPhoto = document.querySelector('#lucas-photo')
      let avatar = document.querySelector('#avatar-1')
      let titleScroll = document.querySelector('#scrollable-title-row')
      let textAboveHeadline = document.querySelector('#text-above-headline')
      let contact = document.querySelector('#contact')
      
      // Sections to block until animation is done
      let home = document.querySelector('#home')
      let about = document.querySelector('#about')
      let companies = document.querySelector('.companies')
      
      // Sections to be triggered
      let portfolio = document.querySelector('.portfolio-cards-inner')
      
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(TextPlugin)
  
      const _bannerAnimation = () => (
        gsap.set(home, {
          xPercent: 0,
          yPercent: 0
        }),
        gsap.timeline({
          scrollTrigger: {
            trigger: home,
            scrub: true,
            pin: true,
            pinSpacing: true,
            start: 'top top',
            end: '80%',
            invalidateOnRefresh: false,
            once: false
          }
        })
        .to(titleScroll, {
          yoyo: true,
          y: 200
        })
        .to(textAboveHeadline, {
          yoyo: true,
          text: `${siteLanguage.current.welcome.dynamicTextScrolled} 🖱`,
          textShadow: '4px 4px 15px rgba(200, 200, 200, 0.4)',
          scale: 1
        })
        .to(lucasPhoto, {
          yoyo: true,
          opacity: 1,
          scale: 1.3,
          y: -550
        })
      )
  
      const _avatarAnimation = () =>  (
        gsap.set(about, {
          xPercent: 0,
          yPercent: 0
        }),
        gsap.timeline({
          scrollTrigger: {
            trigger: about,
            toggleActions: 'none pause none none',
            scrub: true,
            pin: true,
            pinSpacing: true,
            start: 'top top',
            end: '80%',
            invalidateOnRefresh: false,
            once: false
          }
        })
        .to(avatar, {
          yoyo: true,
          opacity: 1,
          x: 480,
          y: 30,
          rotation: 2,
          scale: 1.1
        })
      )
  
      const _companiesAnimation = () => (
        gsap.set(companies, {
          xPercent: 0,
          yPercent: 0
        }),
        gsap.timeline({
          scrollTrigger: {
            trigger: portfolio,
            scrub: true,
            pin: true,
            pinSpacing: false,
            start: 'start end',
            end: '100%',
            invalidateOnRefresh: false,
            once: false
          }
        })
        .to(contact, {
          yoyo: true,
          y: -100,
        })
      )
      
      const _contactAnimation = () => (
        gsap.timeline({
          scrollTrigger: {
            trigger: companies,
            scrub: true,
            pin: true,
            pinSpacing: false,
            start: 'start start',
            end: '100%',
            invalidateOnRefresh: false,
            once: false
          }
        })
        .to(companies, {
          yoyo: true,
          opacity: 0,
        })
      )
  
      _bannerAnimation()
      isDesktop && _avatarAnimation()
      isDesktop && _companiesAnimation()
      _contactAnimation()
    }
  }, [isDesktop, isLoading, window.scrollY])
  
  const renderLucasPhoto = () => (
    <img
      id='lucas-photo'
      className='lucas-photo'
      ref={avatarRef}
      style={{
        transition: 'opacity .5s',
        opacity: 1,
        top: '100vh'
      }}
      src={lucasPhoto}
      alt='About Images'
    />
  )

  const renderAllContent = useCallback(() => {
    const sections = {
      header:
        <Header
          color='color-transparent'
          translate={translate}
          logo='symbol-dark'  
          homeLink='/'
        />,
      welcome: 
        <div id='home' className='fix'>
          <div className='slider-wrapper'>
            {/* Start Single Slide */}
            {slideList.map((value, index) => (
              <div
                className={`
                  slide personal-portfolio-slider slider-paralax
                  slider-style-3 d-flex align-items-center
                  justify-content-center bg_image
                  bg_image${isDesktop ? '' :'-mobile'}
                `}
                key={index}
              >
                { isDesktop &&
                  <Particles
                    className={`particles${isDesktop ? '' :'-mobile'}`}
                    style={{ opacity: particlesOpacity }}
                    params={{
                      particles: {
                        number: {
                          value: 2000,
                          density: {
                            enable: false
                          },
                        },
                        size: {
                          value: 2.5,
                          random: true,
                          anim: {
                            speed: 4,
                            size_min: 0.3,
                          },
                        },
                        line_linked: {
                          color: '#6a6a6a8c',
                          enable: false,
                        },
                        move: {
                          random: true,
                          speed: 0.5,
                          direction: 'top',
                          out_mode: 'out',
                        },
                      },
                      interactivity: {
                        detect_on: 'canvas',
                        events: {
                          onhover: {
                            enable: true,
                            mode: 'bubble',
                          },
                          onclick: {
                            enable: false,
                            mode: 'repulse',
                          },
                        },
                        modes: {
                          bubble: {
                            distance: 150,
                            duration: 5,
                            size: 5,
                            opacity: 1,
                          },
                          repulse: {
                            distance: 300,
                            duration: 30,
                          },
                        },
                      },
                    }}
                  />
                }
                { isDesktop && renderLucasPhoto()}
                <div
                  className='container'
                  style={{
                    padding: isDesktop ? '' : '0',
                    pointerEvents: 'none',
                  }}
                >
                  <div className='row' id='title-row'>
                    <div className={'col-lg-12'}>
                      <div className={`inner ${value.textPosition}`}>
                        
                        <span id='text-above-headline'>
                          {siteLanguage.current.welcome.dynamicText}
                        </span>
                      
                        <div id='scrollable-title-row'>
                          <h1 className='title'>
                            {siteLanguage.current.welcome.headline1}
                            <br/>
                              {siteLanguage.current.welcome.headline2}
                            <br />
                            <TextLoop interval={1500}>
                              <span>{siteLanguage.current.welcome.headlineWordLoop['1']}</span>
                              <span>{siteLanguage.current.welcome.headlineWordLoop['2']}</span>
                              <span>{siteLanguage.current.welcome.headlineWordLoop['3']}</span>
                            </TextLoop>{' '}
                          </h1>
                          <button
                            style={{
                              color: 'white',
                              border: '2px solid white',
                              marginTop: '12px',
                              marginBottom: '50px',
                              pointerEvents: 'all',
                            }}
                            className='rn-btn btn-solid'
                          >
                            <a
                              style={{
                                color: 'white',
                              }}
                              href={myPDF}
                              download='Lucas Padilha - 2022.pdf'
                            >
                              {siteLanguage.current.welcome.downloadCTA}
                            </a>
                          </button>

                        </div>
                        {value.description ? (
                          <p className='description'>{value.description}</p>
                        ) : (
                          ''
                        )}
                        {value.buttonText ? (
                          <div className='slide-btn'>
                            <a
                              className='rn-button-style--2 btn-primary-color'
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Single Slide */}
          </div>
        </div>,
      aboutMe:
        <AboutMe
          isDesktop={isDesktop}
          siteLanguage={siteLanguage}
        />,
      services: 
        <ServiceList
          item='3'
          localeTexts={[
            siteLanguage.current.services.first,
            siteLanguage.current.services.second,
            siteLanguage.current.services.third
          ]}
          siteLanguage={siteLanguage}
        />,
      portfolio: 
        <PortfolioList
          localePortfolio={siteLanguage.current.portfolio}
          styleVariation='text-center mt--40'
          column='col-lg-4 col-md-6 col-sm-6 col-12'
          item='6'
        />,
      companies: 
        <Companies 
          localeLanguage={siteLanguage.current.companies}
        />,
      contact:
        <Contact
          localeLanguage={siteLanguage.current.contact}
          contactImages='/assets/images/about/about-9.jpg'
        />,
      footer: <Footer />
    }

    setTimeout(() => setIsLoading(false), 3600);
    
    const renderLandingPage = () => (
      <>
        { sections.header }
        { sections.welcome }
        { sections.aboutMe }
        { sections.services }
        { sections.portfolio }
        { sections.companies }
        { sections.contact }
        { sections.footer }
      </>
    )
    
    return (
      <div className='active-dark'>
        <Helmet pageTitle='Lucas Padilha' />
        { isLoading ? <Loader/> : renderLandingPage() }
      </div>
    )
  }, [isLoading, siteLanguage])

  return renderAllContent()

}

export default PortfolioLanding
