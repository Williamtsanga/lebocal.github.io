import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

class Main extends React.Component {
    render(){
        return(
            <div className="Main" >
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}


export default Main