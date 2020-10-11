import React from 'react'
import {Route,Switch} from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
                <Switch>
                        <Route exact path={"/"} component={Main} />
                        {/* <Route exact path={"/signup/"} component={Signup} />
                        <Route exact path={"/hello/"} component={Hello} /> */}
                        <Route path={"/"} render={() => <div>Home again</div> } />
                </Switch>
            </div>
        );
    }
}