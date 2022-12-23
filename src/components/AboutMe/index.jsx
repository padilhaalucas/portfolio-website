import React from 'react'
import Tab from '../Tab'
import avatar1 from '../../assets/images/about/avatar1.png'

const AboutMe = ({siteLanguage, isDesktop}) => (
  <div id='about' className='fix'>
    <div className='about-area ptb--120  bg_color--1'>
      <div className='about-wrapper'>
        <div className='container about-container'>
          <div className='row row--35 align-items-center'>
            <div className='col-lg-12'>
              <div className='about-inner inner'>
                {
                  isDesktop &&
                  <div className='thumbnail' id='avatar-1'>
                    <img
                      id='avatar-1-img'
                      src={avatar1}
                      alt='About Images'
                    />
                  </div>
                }
                
                <div className='section-title'>
                  <h2 className='title'>
                    {siteLanguage.current.aboutMe.title}
                  </h2>
                  <div>
                    <div className='row-start row--35 align-items-start'>
                      <div className='col-md-12'>
                        <p className='description'>
                          {siteLanguage.current.aboutMe.text}
                        </p>
                      </div>
                    </div>

                    <div className='row mt--30'>
                      <Tab
                        tabStyle='tab-style--1'
                        tabs={[
                          siteLanguage.current.aboutMe.skills,
                          siteLanguage.current.aboutMe.education
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe
