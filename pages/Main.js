import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import Aside from '../components/Aside'

import '../assets/css/content.css'

class Main extends React.Component {
    render(){
        return(
            <div >
                <Header/>
                <main >
                    <Aside />
                    <MainContent/>
                </main>
                <Footer/>
            </div>
        );
    }
}


export default Main