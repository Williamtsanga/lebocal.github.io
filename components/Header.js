import React from 'react'

import Nav from './Nav'

class Header extends React.Component {
    render(){
        return(
            <header>
                <Nav />
                <div className="head" >
                    <img src='../assets/images/3.jpg' alt="hum" style={{width:"100%",height:"400"}} />
                </div>
            </header>
        );
    }
}
export default Header