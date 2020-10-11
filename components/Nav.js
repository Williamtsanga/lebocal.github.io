import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../assets/images/logo.jpeg'

class Nav extends React.Component {
    render(){
        return(
            <div className="nav" >
                <div className="logo" >
                    <Link to={'/'} ><img alt="Logo" className="logo-img" src={logo} /></Link>
                    </div>
                    <nav>
                    <ul>
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/'} >Magisin</Link></li>
                        <li><Link to={'/'} >Documents</Link></li>
                        <li><Link to={'/'} >About us</Link></li>
                    </ul>
                    </nav>
                <div className="auth" >
                   <Link to={'/'} className={"login"} ><span>Log In</span></Link>
                </div>
            </div>
        );
    }
}

export default Nav