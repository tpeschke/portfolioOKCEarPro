import React, { Component } from 'react'

import ContactForm from './ContactForm'

export default class Contact extends Component {


    render() {
        return (
            <div className='productsOuter' id="contactOuter">
                <div className="productsHeader" id="professionHeader">
                    <div className="logoSmall"></div>
                    <h1>Contact</h1>
                </div>

                <div className="contactContainer">

                    <ContactForm />

                    <div className="contactDivider"></div>

                    <div className="contactHeader">
                        <h4>Contact Us Directly</h4>
                        <div className="contactInfo">
                            <i className="glyphicon glyphicon-earphone"></i>
                            <div>
                                <p className="contactInfoStuff">405-328-0439</p>
                                <p className="contactInfoStuff">405-815-9885</p>
                            </div>
                        </div>
                        <div className="contactInfo">
                            <i className="glyphicon glyphicon-send"></i>
                            <p className="contactInfoStuff">Okcearpro@gmail.com  </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}