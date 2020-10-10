import React from "react"
import ReactDOM from "react-dom"

import '../assets/css/index.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const App = () => {
    return (
        <div>
                <Header/>
                <Main/>
                <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root') )