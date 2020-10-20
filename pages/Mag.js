import React from 'react'
// import {Link} from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
import MagContainer from '../components/MagContainer'

import '../assets/css/mag.css'

class Magazins extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <main>   
                    <Aside />
                    <MagContainer />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Magazins