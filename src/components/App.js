import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import LoginPage from './moviePages/LoginPage'
import NewUser from './moviePages/NewUser'
import OldRatings from './moviePages/OldRatings'
import RatingPage from './moviePages/RatingPage'
import RecommendationsPage from './moviePages/RecommendationsPage'
import Header from "./Header";
import history from "../history";

const App = ()=> {

    return (
        <div className="ui container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/login/newuser" component={NewUser}/>
                    <div>
                        <Header/>
                        <Route path="/rate/:id/:last_id" component={RatingPage}/>
                        <Route path="/recommendations/:id" component={RecommendationsPage}/>
                        <Route path="/oldlist/:id" component={OldRatings}/>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default App