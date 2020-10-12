import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom'

import '../assets/css/mob.css'
import App from '../components/App'
// import Main from '../components/Main'
// import Footer from '../components/Footer'



ReactDOM.render(    <BrowserRouter>
                        <App/>
                    </BrowserRouter>  , document.querySelector('#root') )