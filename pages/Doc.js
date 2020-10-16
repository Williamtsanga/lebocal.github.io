import React from 'react'
import {Link} from 'react-router-dom'

import Boxe from '../components/Boxe'

class Doc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            match : window.matchMedia("(max-width: 928px)").matches,
            value : '',
            focus:"",
            names: [
                "msg",
                "ahn",
                "gi",
                "gc",
                "gm",
                "gind",
                "gtel",
            ],
    
        }
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

    handleChange = (e) => {
        this.setState({value:e.target.value})
        }
    DynamicSearch = () => {
        const {value,names} = this.state
        const response = names.filter(name => name.toLowerCase().includes(value.toLowerCase() ))
        return value ? (response.length > 0 ? response : ["No resultes"]) : []
    }
    handleFocus = (bool) => {
        if (bool){
            this.setState({focus: "focus" })
            document.querySelector('.search').style.top = "-90px"
            document.querySelector("html").style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
        }
        else { 
            this.setState({focus:""})
            document.querySelector("html").style.overflow = 'visible'
            document.body.style.overflow = 'visible'
            document.querySelector('.search').style.top = "0"
        }

    }
    render(){
        // console.log(this.DynamicSearch())
        const levels = [
            "niveau i",
            "niveau ii",
            "niveau iii",
            "niveau iv",
            "niveau v",
        ]
        const {focus,match} = this.state
        return(
            <div className="Doc" >
                        <div className="inDoc">
                        <div className='docHead' >
                            <Link to = '/' >L Equipe</Link>
                        </div>
                        <div className="content" >
                            <div className="subContent" >
                                <div className={`search search--${focus}`}>
                                    <div  type="text"  className="input">
                                    <input 
                                    {...(match ? {onBlur: () => this.handleFocus(false), onFocusCapture: (e) => this.handleFocus(true)}  : {})}
                                     
                                    
                                    onChange={this.handleChange} placeholder="Search" 
                                    value={this.state.value} 
                                    />
                                    </div>
                                    <div className="option">
                                        <div className="innerOption">
                                            {<Listt names={this.DynamicSearch()} />}
                                            <div className="boule" ></div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='boxContainer'>
                                    {
                                        levels.map((item,num) => (
                                            <Boxe key={num} text={item} />
                                        ))
                                    }

                                </div>
                            </div>

                            </div>
                        <div className='docFoot' >copyright L'Equipe : @lebocal</div>

                        </div>
                                    </div>
        );
    }
}

const Listt = ({names}) => {
    // console.log(names,"fuck")
    return (
        <ul>
            {
            names.map((item,id) => (
                <li key={id} >
                    {item}
                </li>
    ))
    }
        </ul>
    )
}

export default Doc