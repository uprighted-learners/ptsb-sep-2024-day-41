import React from 'react'

import Salutations from './components/Salutations'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import "./App.css"

export default function App(props) {
    return (
        <div className='App'>
            <Navigation />
            <Salutations values={props} />
            <Footer />
        </div>
    )
}
