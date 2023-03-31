import React, {
  useCallback,
  useReducer,
  useEffect,
  useState,
  useMemo,
  useRef,
  memo
} from 'react'

import TextLoop from 'react-text-loop'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/all'

import AboutMe from './components/AboutMe'
import Helmet from './components/Common/Helmet'
import Loader from './components/Common/Loader'
import Companies from './components/Companies/index'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Calendar from './components/Calendar'
import PortfolioList from './components/Portfolio'
import ServiceList from './components/ServiceList'

import lucasPhoto from './assets/images/about/lucas1.png'
import myPDF from './assets/lucasPadilha2022.pdf'

import enUS from './locales/en-US.json'
import ptBR from './locales/pt-BR.json'

const PortfolioLanding = () => {
  const [isLoading, setIsLoading] = useState(true)

  const initialState = { current: enUS, name: 'en-US' }

  const reducer = (state, action) => {
    switch (action.type) {
      case "TRANSLATE_BR":
        return ({ current: ptBR, name: 'pt-BR' })
      case "TRANSLATE_US":
        return ({ current: enUS, name: 'en-US' })
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

  const avatarRef = useRef()
  
  const isDesktop = window.matchMedia('screen and (min-width: 1296px)').matches

  useEffect(() => {
    if (!isLoading) {
      // Items that will be animated
      const lucasPhoto = document.querySelector('#lucas-photo');
      const avatarElement = document.querySelector('#avatar-1');
      const titleScroll = document.querySelector('#scrollable-title-row');
      const textAboveHeadline = document.querySelector('#text-above-headline');
      const contactElement = document.querySelector('#contact');
  
      // Sections to block until animation is done
      const homeSection = document.querySelector('#home');
      const aboutSection = document.querySelector('#about');
      const companiesSection = document.querySelector('.companies');
  
      // Sections to be triggered
      const portfolioSection = document.querySelector('.portfolio-cards-inner');
  
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(TextPlugin);
  
      const bannerAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: homeSection,
          scrub: true,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: '80%',
          invalidateOnRefresh: false,
          once: false,
        },
      })
        .set(homeSection, {
          xPercent: 0,
          yPercent: 0,
        })
        .to(titleScroll, {
          yoyo: true,
          y: 200,
        })
        .to(textAboveHeadline, {
          yoyo: true,
          text: `${siteLanguage.current.welcome.dynamicTextScrolled} 🖱`,
          textShadow: '4px 4px 15px rgba(200, 200, 200, 0.4)',
          scale: 1,
        })
        .to(lucasPhoto, {
          yoyo: true,
          opacity: 1,
          scale: 1.3,
          y: -550,
        });
  
      const avatarAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          toggleActions: 'none pause none none',
          scrub: true,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: '80%',
          invalidateOnRefresh: false,
          once: false,
        },
      })
        .set(aboutSection, {
          xPercent: 0,
          yPercent: 0,
        })
        .to(avatarElement, {
          yoyo: true,
          opacity: 1,
          x: 440,
          y: 30,
          rotation: 2,
          scale: 1.1,
        });
  
      const companiesAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: portfolioSection,
          scrub: true,
          pin: true,
          pinSpacing: false,
          start: 'start end',
          end: '100%',
          invalidateOnRefresh: false,
          once: false,
        },
      })
        .set(companiesSection, {
          xPercent: 0,
          yPercent: 0,
        })
        .to(contactElement, {
          yoyo: true,
          y: -10,
        });
  
      const contactAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: companiesSection,
          scrub: true,
          pin: true,
          pinSpacing: false,
          start: 'start start',
          end: '80%',
          invalidateOnRefresh: false,
          once: false,
        },
      })
        .to(companiesSection, {
          yoyo: false,
          opacity: 0,
          y: 200,
        });
  
      bannerAnimationTimeline.call()
      isDesktop && avatarAnimationTimeline.call()
      isDesktop && companiesAnimationTimeline.call()
      contactAnimationTimeline.call()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, isLoading])
  
  const LucasPhoto = memo(() => (
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
  ))

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
                { isDesktop && <LucasPhoto/>}
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
                            <div style={{ width: '80vw', maxWidth: '90vw', display: 'block', wordWrap: 'wrap'}}>
                              <TextLoop interval={1500}>
                                <span>{siteLanguage.current.welcome.headlineWordLoop['1']}</span>
                                <span>{siteLanguage.current.welcome.headlineWordLoop['2']}</span>
                                <span>{siteLanguage.current.welcome.headlineWordLoop['3']}</span>
                              </TextLoop>{' '}
                            </div>
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
                              download='Lucas Padilha - 2023.pdf'
                            >
                              {siteLanguage.current.welcome.downloadCTA}
                            </a>
                          </button>

                        </div>
                        { value.description ? <p className='description'>{value.description}</p> : <></> }
                        { value.buttonText ? 
                          <div className='slide-btn'>
                            <a
                              className='rn-button-style--2 btn-primary-color'
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div> : <></>
                        }
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
        {/* { sections.contact } */}
        <Calendar />
        { sections.footer }
      </>
    )
    
    return (
      <div className='active-dark'>
        <Helmet pageTitle='Lucas Padilha' />
        { isLoading ? <Loader version={'v2'}/> : renderLandingPage() }
      </div>
    )
  }, [isLoading, isDesktop, slideList, siteLanguage])

  return renderAllContent()
}

export default PortfolioLanding
