import React from 'react'

import './style.css'
import './stylev2.css'

const Loader = ({version}) => {
  const v1 = () => {
    return (
      <div className='loader-main'>
        <ul className='loader-content'>
          <li>P</li>
          <li>A</li>
          <li>D</li>
          <li>I</li>
          <li>L</li>
          <li>H</li>
          <li>A</li>
        </ul>
      </div>
    )
  }

  const v2 = () => {
    return (
      <div className='loader-main'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-character">PADILHA</h3>
          </div>
        </div>
      </div>
    )
  }

  return version === 'v1' ? v1() : v2()
}

export default Loader
