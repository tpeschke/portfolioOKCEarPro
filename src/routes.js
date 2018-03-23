import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PageShell from './components/HOC/PageShell'
import LandingPage from './components/landingPageCom/LandingPage'
import Products from './components/products/Products'
import AboutUs from './components/AboutUs'
import Contact from './components/contact/Contact'
import Personal from './components/Personal'
import Professional from './components/Professional'

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch >
                    <Route component={ PageShell(LandingPage) } exact path="/" />
                    <Route component={ PageShell(Products) } path='/products' />
                    <Route component={ PageShell(AboutUs) } path='/aboutus' />
                    <Route component={ PageShell(Contact) } path='/contact' />
                    <Route component={ PageShell(Personal) } path='/personal' />
                    <Route component={ PageShell(Professional) } path='/professional' />
                    
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}