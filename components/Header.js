import React from 'react'

import Nav from './Nav'

class Header extends React.Component {
    render(){
        return(
            <header>
                <Nav />
                <div className="head" >
                    header
                </div>
            </header>
        );
    }
}
export default Header