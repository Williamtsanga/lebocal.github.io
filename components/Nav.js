import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCross } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/logoC.jpeg'

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            match : window.matchMedia("(max-width: 922px)").matches,
            mobNav: {
                active: false,
                comp: faBars,
                Class:'dispNone'
            },
        }
        this.handleNavClick = this.handleNavClick.bind(this)
    }
    componentDidMount(){
        const handler = e => this.setState({match: e.matches})    
        window.matchMedia("(max-width: 922px)").addListener(handler)
    }
         addNav () {
             console.log(this.state.match)
            return (
            <nav>
                <ul>
                    <li className={'onLink'} ><Link to={'/'}  >Home</Link></li>
                    <li><Link to={'/'} >Magisin</Link></li>
                    <li><Link to={'/'} >Documents</Link></li>
                    <li><Link to={'/'} >About us</Link></li>
                </ul>
            </nav>)
        }

        handleNavClick () {
            const { mobNav : {active , Class, comp} } = this.state
            if (active) {
                this.setState({ mobNav : {
                    comp:faBars,
                    active:false,
                    Class:'dispNone'
                } })
            } else {
                this.setState({ mobNav : {
                    comp:faCross,
                    active:true,
                    Class:''
                } })
            }
        }

    render(){
        const {mobNav : { comp, Class }} = this.state
        return(
            <div>
                <div className="nav" >
                <div className="logo" >
                    <img alt="Logo" className="logo-img" src={logo} />
                </div>

                        {this.state.match ? '' : this.addNav()}
                            <div className="auth" >
                                <Link to={'/'} className={"login"} ><span>Log In</span></Link>
                            </div>
                            <div className="mobil" onClick={this.handleNavClick} >
                            <FontAwesomeIcon icon={comp} size={"2x"} />
                        </div>

                    
            </div>
            <div className={`mob-nav ${Class} `} >
                {this.state.match ? this.addNav():'' }

            </div>

            </div>
        );
    }
}

export default Nav