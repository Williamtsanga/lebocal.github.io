import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom'

import '../assets/css/main.css'
import '../assets/css/docs.css'
import App from './App'

ReactDOM.render(    <BrowserRouter>
                        <App/>
                    </BrowserRouter>  , document.getElementById('root') )