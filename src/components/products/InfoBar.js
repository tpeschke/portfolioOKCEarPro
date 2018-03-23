import React, { Component } from 'react'

export default class InfoBar extends Component {
    constructor() {
        super()

        this.state = {
            performance: false,
            color: false,
            mold: false
        }
    }

    showDrop = (type) => {
        var {performance, color, mold} = this.state

        if (performance || color || mold) {this.setState({performance: false, color: false, mold: false})}

        this.setState({[type]: !this.state[type]})
    }


    render() {
        return (
            <div>
                <div className="productsHeader" id="productsHeader">
                    <div className="productsLogoContainer">
                    <div className="logoSmall"></div>
                    <h1>Products</h1>
                    </div>
                    <div className="productsNav">
                        <h3 onClick={_=>this.showDrop('performance')}>Performance</h3>
                        <h2>|</h2>
                        <h3 onClick={_=>this.showDrop('color')}>Color Options</h3>
                        <h2>|</h2>
                        <h3 onClick={_=>this.showDrop('mold')}>Insta-Mold</h3>
                    </div>
                </div>
                <div className="dropShell" style={{ height: this.state.height }}>
                    <div className={this.state.performance ? 'dropBody dropPerformanceOpen' : 'dropBody'}>
                        <ul>
                            <li>Input sensitivity 119dB@1mw</li>
                            <li>Impedance 20 Ohm</li>
                            <li>Frequency response 20Hz to 17KHz</li>
                            <li>Single Bore Design</li>
                            <li>Non-detachable cord</li>
                            <li>Noise Isolation -30dB</li>
                            <li>Single Balance Armature driver</li>
                        </ul>
                    </div>
                    <div className={this.state.color ? 'dropBody dropColorOpen' : 'dropBody'}>
                        <h2>Colors can be mixed, marbled, and tailored to your liking. Logos, decals, images, or names are also available to customize your earpieces to your personality. Chameleon Ears™ can be made with glitter and glow in the dark.</h2>
                    </div>
                    <div className={this.state.mold ? 'dropBody dropMoldOpen' : 'dropBody'}>
                        <h2>Insta-Mold® Custom Molded ear pieces are created directly in your ear so you will receive the most accurately fit headphones available. This guarantees a comfortable fit for hours of use in any setting.</h2>
                    </div>
                </div>
            </div>
        )
    }
}