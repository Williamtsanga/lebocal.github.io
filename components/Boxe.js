import React from 'react'

import done from '../assets/images/don2.jpg'

const Boxe = ({text}) => {
  return (
    <div className="box">
        <div className="innerBox">
        <img src={done} alt="thumbnail" />
        <div className="title">{text}</div>
        </div>

    </div>
    )
}

export default Boxe