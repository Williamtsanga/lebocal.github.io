import React from 'react'
import {Route,Switch} from 'react-router-dom'

import Doc from '../pages/Doc'
import Main from '../pages/Main'
import About from '../pages/about'

class App extends React.Component {
    render(){
        return(
            // <div className="app" >
                    <Switch>
                        <Route exact path={"/"} component={Main} />
                        <Route path={"/doc"} component={Doc} />
                        <Route path={"/about"} component={About} />
                        <Route render={({location}) => (<h1>Error no location found at <code>{location.pathname}</code> </h1>) } />
                    </Switch>
            // </div>
        );
    }
}


export default App