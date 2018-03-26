import React, { Component } from 'react'


export default class Professional extends Component {

    render() {
        return (
            <div className='productsOuter'>
                <div className="productsHeader" id="professionHeader">
                    <div className="logoSmall"></div>
                    <h1>Professional</h1>
                </div>

                <div className="productsInfo" id="professionalInfo">
                    <h2>This option is best for industrial business applications, or other large group settings. A Professional Fitting Specialist will come to you and create custom earpieces on site. Many of our products can be made on the spot, and those that can't are worth the wait.</h2>
                </div>
                
                <div className="professionalImageBanner"></div>

                <div className="professionalShell">
                    <div className="professionalCardShell">
                        <h2 className="productTitle">Cost Effective</h2>
                        <p className="professionalDesc">The Insta-Mold Hearing Protection Device will dramatically reduce the amount of money your company spends on hearing protection annually & still offer your employees the most comfortable & consistent hearing protection available today.</p>
                    </div>
                    <div className="professionalCardShell">
                        <h2 className="productTitle">Hygienic</h2>
                        <p className="professionalDesc">Foam earplugs can harbor harmful bacteria. Insta-Mold silicone ear plugs can be regularly cleaned to reduce the occurrence of bacterial buildup. </p>
                    </div>
                    <div className="professionalCardShell">
                        <h2 className="productTitle">Comfortable</h2>
                        <p className="professionalDesc">The silicone cures to a soft elastic rubber that will bend with the ear canal during normal mouth & jaw movement. Creating a hearing protector that is comfortable, simple to insert, & fits in the ear the exact same way every time it is worn.</p>
                    </div>
                </div>

                <div className="professionalFooter">
                    <div className="professionalFooterContainerLeft">
                        <div className="professionalFooterImage1"></div>
                        <div className="professionalFooterContent">
                            <h2 id="professionalFooterHeader">Communication</h2>
                            <p>Almost any two way radio communication system can be connected to the Insta-Mold Hearing Protection Device.</p>
                        </div>
                    </div>
                    <div className="professionalFooterContainerRight">
                        <div className="professionalFooterImage2"></div>
                        <div className="professionalFooterContent">
                            <h2 id="professionalFooterHeader">Hearing Protection</h2>
                            <p>EAR custom-fit products have proven to be advantageous from every single angle including comfort, functionality, hygienic value, and cost! All earpieces carry required hearing protection certifications for Europe, USA and Australia.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}