import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
  render(){
    const { pageTitle } = this.props
    
    return(
      <React.Fragment>
        <Helmet>
          <title>{pageTitle}</title>
          <meta 
            name='description' 
            content={`
              web development,
              react development,
              javascript,
              html,
              css,
              redux,
              mechanical engineering,
              design,
              photoshop, 
              illustrator.
            `} 
          />
        </Helmet>
      </React.Fragment>
    )
  }
}

export default PageHelmet
