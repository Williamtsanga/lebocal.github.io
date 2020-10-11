import React from 'react'

import Nav from './Nav'
import images from '../assets/images/3.jpg'

class Header extends React.Component {
    render(){
        return(
            <header>
                <Nav />
                <div className="head" >
                    <img src={images} alt="hum" style={{width:"100%",height:"400"}} />
                </div>
            </header>
        );
    }
}
export default Header