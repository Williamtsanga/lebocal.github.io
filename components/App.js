import React from 'react'
import {Route,Switch} from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
    render(){
        return(
            <div className="app" >
                <Header/>
                    <Switch>
                        <Route exact path={"/"} component={Main} />
                        {/* <Route exact path={"/signup/"} component={Signup} />
                        <Route exact path={"/hello/"} component={Hello} /> */}
                        <Route path={"/"} render={() => <div>Home again</div> } />
                    </Switch>

                <Footer/>
            </div>
        );
    }
}


export default App