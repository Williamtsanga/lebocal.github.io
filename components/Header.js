import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from '../assets/images/logoC.jpeg'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.MobUl = React.createRef()
        this.DeskUl = React.createRef()
        this.state = {
            match : window.matchMedia("(max-width: 928px)").matches,
            mobNav: {
                active: false,
                Class: ''
            },

        }
        // this.elmnt = React.createElement('div',{}, "html,body{background-color:red}")

    }
    componentDidMount(){
        window.addEventListener('resize', this.updateDim)
    }
    updateDim = (e) => {
        const {match} = this.state
        if (window.innerWidth < 928){
            if(match) 
                return
            else 
                this.setState({match: true})
        } else {
            if(!match) 
                return
            else 
                this.setState({match: false})
        }

    }
        handleActive = (e) => {
            console.log(e.target,window.location.pathname)
        }
        addDet () {
            return(
                <nav>
                <ul>
                    <li><NavLink activeClassName='active' exact to={'/'}  >Home</NavLink></li>
                    <li><NavLink activeClassName='active' to={'/mag'} >Magisin</NavLink></li>
                    <li><NavLink activeClassName='active' to={'/doc'} >Documents</NavLink></li>
                    <li><NavLink activeClassName='active' to={'/about'} >About us</NavLink></li>
                </ul>
                </nav>
            )
        }
        addNav () {
             console.log(this.state.match)
            const { mobNav : {Class} } = this.state
            return (
            <nav id="nav" className={`nav nav--${Class}`} role="navigation" >
                <ul className="nav__menu" id="menu" tabIndex="-1" ref={this.MobUl} aria-label="main navigation" hidden>
                    <li className="nav__item"  ><NavLink exact activeClassName='active' className={"nav__link"} to={'/'}  >Home</NavLink></li>
                    <li className="nav__item"><NavLink activeClassName='active' className={"nav__link"} to={'/mag'} >Magisin</NavLink></li>
                    <li className="nav__item"><NavLink activeClassName='active' className={"nav__link"} to={'/doc'} >Documents</NavLink></li>
                    <li className="nav__item"><NavLink activeClassName='active' className={"nav__link"} to={'/about'} >About us</NavLink></li>
                </ul>
                <div className="splash" ></div>
                <div onClick={this.handleNavClick} className="nav__toggle" role="button" aria-expanded="false" aria-controls="menu">
                                <svg className="menuicon"  width="50" height="50" viewBox="0 0 50 50">
                                    <title>Toggle Menu</title>
                                    <g>
                                    <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                    <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                                    <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                                    </g>
                                </svg>
                            </div>

            </nav>
            )
        }

        handleNavClick = () => {
            const { mobNav : {active} } = this.state
            if (active) {
                document.querySelector("html").style.overflow = ''
                document.body.style.overflow = ''
                this.MobUl.current.hidden = active
                this.setState({ mobNav : {
                    active:false,
                    Class:''
                } })
            } else {
                document.querySelector("html").style.overflow = 'hidden'
                document.body.style.overflow = 'hidden'
                this.MobUl.current.hidden = active
                this.setState({ mobNav : {
                    active:true,
                    Class:'open'
                } })
            }
        }

    render(){
        

        return(
            <header className="blab" >
                <div className="Main-nav" >
                <div className="logo" >
                    <img alt="Logo" className="logo-img" src={logo} />
                </div>

                        {this.state.match ? '' : this.addDet()}
                            <div className="auth" >
                                <Link to={'/'} className={"login"} ><span>Log In</span></Link>
                            </div>
                </div>
                {this.state.match ? this.addNav() :''}

            </header>
        );
    }
}

export default withRouter(Header)