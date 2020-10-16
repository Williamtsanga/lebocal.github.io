import react from 'react';
import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'


class About extends React.Component {
    render(){
        return(
            <div className="about">
                <Header/>
                About
                <Footer/>
            </div>
        )
    }
}

export default About