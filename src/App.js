import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'

import Doc from '../pages/Doc'
import Main from '../pages/Main'
import Magazins from '../pages/Mag'
import About from '../pages/about'

class App extends React.Component {
    render(){
        return(
            // <div className="app" >
                    <Switch>
                        <Route exact path={"/"} component={Main} />
                        <Route path={"/mag"} component={Magazins} />
                        <Route path={"/doc"} component={Doc} />
                        <Route path={"/about"} component={About} />
                        <Route render={({location}) => (<h1>Error no location found at <code>{location.pathname} <br></br> Go to <Link to={'/'}>Home</Link> </code> </h1>) } />
                    </Switch>
            // </div>
        );
    }
}


export default App