import React from 'react'

import {
  defiance,
  farfetch,
  ibm,
  amyris,
  biossance
} from '../../assets/images/brand'

import './style.css'

const Companies = ({ localeLanguage }) => {
  const _renderLiTagEachBrand = (brand, src) => (
    <li>
      <img
        className={brand}
        src={src}
        alt={`Logo ${brand}`}
      />
    </li>
  )

  return (
    <React.Fragment>
        <div id='companies' className='companies ptb--120 bg_color--5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '30px',
                  textAlign: 'center',
                  color: '#6c757d',
                }}
              >
                {localeLanguage.title}
              </p>
          
              <ul className='brand-style-2'>
                { _renderLiTagEachBrand('farfetch', farfetch) }
                { _renderLiTagEachBrand('defiance', defiance) }
                { _renderLiTagEachBrand('ibm', ibm) }
                { _renderLiTagEachBrand('amyris', amyris) }
                { _renderLiTagEachBrand('biossance', biossance) }
              </ul>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Companies
