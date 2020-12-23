import { from } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import Episodes from './components/episodes/Episodes';
import Locations from "./components/locations/Locations";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home}/>
                <Route exact path='/characters' component={Characters} />
                <Route exact path='/episodes' component={Episodes} />
                <Route exact path='/locations' component={Locations} />
            </Switch>
        </Router>
    )
}

export default Routes;