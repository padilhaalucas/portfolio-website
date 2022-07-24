import React, { useState } from 'react'
import defiance from '../../assets/images/brand/defiance.svg'
import farfetch from '../../assets/images/brand/farfetch.svg'
import ibm from '../../assets/images/brand/ibm.svg'
import amyris from '../../assets/images/brand/amyris.svg'
import biossance from '../../assets/images/brand/biossance.svg'

import './style.css'

const Company = ({ localeLanguage }) => {
  const [wasHovered, setWasHovered] = useState()

  return (
    <React.Fragment>
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
        <li>
          <img className='farfetch' src={farfetch} alt='Logo Farfetch' />
        </li>
        <li>
          <img className='defiance' src={defiance} alt='Logo Defiance ETFs' />
        </li>
        <li>
          <img className='ibm' src={ibm} alt='Logo IBM' />
        </li>
        <li>
          <img className='amyris' src={amyris} alt='Logo Amyris' />
        </li>
        <li>
          <img className='biossance' src={biossance} alt='Logo biossance' />
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Company
