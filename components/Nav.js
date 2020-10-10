import React from 'react'

class Nav extends React.Component {
    render(){
        return(
            <div className="nav" >
                <div className="logo" ><a href="#">L'Equipe</a></div>
                    <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Magisin</a></li>
                        <li><a href='#'>Documents</a></li>
                        <li><a href='#'>About us</a></li>
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