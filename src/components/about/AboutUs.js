import React, { Component } from 'react'
import ChikataraBest from './ChikataraBest.jpg'

export default class AboutUs extends Component  {
    render(){
        return (
            <div className="container">
            <div className="white center">
                <h1>About Us</h1>
                <img src={ChikataraBest} alt="hi" className="together"/>
                <p>We're children making this website and the reason of making this website.<br />
                I loved making this website and my name is Chikatara Kanu and help of Chikamso Kanu</p>
                
            </div>
            </div>
        )
    }
}
