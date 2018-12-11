import React, { Component } from 'react'
import ReactSVG from 'react-svg'


export default class AboutUs extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [{
                id: 'one', body: '“I am the parent of multiple children with sensory processing disorder. With their personal custom fit earplugs, my kids are not covering their ears and crying in frustration at things that others take for granted.”', name: 'S. George', subtitle: 'Mother of Special Needs Children'
            }, {
                id: 'two', body: '“I used my earplugs at the shooting range and they are way ahead of the curve.”', name: 'C Stinson', subtitle: 'Blanchard OK'
            }, {
                id: 'three', body: '“Communication in loud environments is so much easier with the radio capable earplugs.”', name: 'S. Dartez', subtitle: 'Oil Field Operator'
            }]
        }
    }

    render() {
        var review = this.state.reviews.map((val, i) => {
            return (
                <div key={val.id} className={i % 2 === 0 ? "aboutReviewCard" : "aboutReviewCard aboutReviewCardOdd"}>
                    <div className='aboutReviewImage' id={val.id}></div>
                    <div className='aboutReviewContents'>
                        <p>{val.body}</p>
                        <p className="aboutReviewSig">- {val.name} ({val.subtitle})</p>
                    </div>
                </div>
            )
        })

        return (
            <div className='productsOuter'>
                <div className="productsHeader" id="aboutHeader">
                    <h1>About Us</h1>
                </div>

                <div className="productsContainer" id="aboutContainer">
                    {/* <div className="aboutLogoLarge"></div> */}
                    <div className="aboutLogoOuter">
                        <div className="aboutLogoInner">
                            <div className="aboutLogoShell">
                                <div className="aboutLogoBar1"></div>
                                <div className="aboutLogoBar2"></div>
                                <div className="aboutLogoBar3"></div>
                                <div className="aboutLogoBar4"></div>
                                <div className="aboutLogoBar5"></div>
                                <div className="aboutLogoBar6"></div>
                                <div className="aboutLogoBar7"></div>
                                <div className="aboutLogoBar8"></div>
                                <div className="aboutLogoBar9"></div>
                                <div className="aboutLogoBar10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="aboutContents">
                        <h4>Our line of custom-fit (molded) earplugs provide a comfortable fit and give you optimal hearing protection performance. </h4>
                        <p>OKC EarPro is an Authorized Provider of EAR Inc products including Insta-Mold silicone. EAR Inc. is known throughout the world for providing quality products and services that enhance and protect the hearing experience, contribute to the effectiveness of hearing healthcare professionals, and support innovation in the hearing healthcare industry. EAR Inc. offers custom-fit, universal-fit, and a music/audio line of products designed for industrial, law enforcement, shooting/hunting and other leisure activities. All earpieces carry required hearing protection certifications for Europe, USA and Australia.</p>
                    </div>
                </div>

                <div className="aboutPageBreak"></div>

                <div className="aboutReviewContainer">
                    {review}
                </div>
            </div>
        )
    }
}