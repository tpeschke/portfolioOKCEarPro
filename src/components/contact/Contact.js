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

                    <div className="contactDivider"></div>

                    {/* <ContactForm /> */}

                    <iframe id="iframeId" src="https://docs.google.com/forms/d/e/1FAIpQLSfagATz1KZo58vwCpyxsn2e0Q_-eT99WQx4KS0lCr15d07y2w/viewform?embedded=true" height="1000px" width="600px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

                </div>
            </div>
        )
    }
}