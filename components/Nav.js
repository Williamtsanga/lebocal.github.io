import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    render(){
        return(
            <div className="nav" >
                <div className="logo" ><a href="#">L'Equipe</a></div>
                    <nav>
                    <ul>
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/'} >Magisin</Link></li>
                        <li><Link to={'/'} >Documents</Link></li>
                        <li><Link to={'/'} >About us</Link></li>
                    </ul>
                    </nav>
                <div className="auth" >
                   <a href="#" className="login" ><span>Log In</span></a>
                </div>
            </div>
        );
    }
}

export default Nav