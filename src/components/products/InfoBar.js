import React, { Component } from 'react'

export default class InfoBar extends Component {
    constructor() {
        super()

        this.state = {
            performance: 'dropBody',
            color: 'dropBody',
            mold: 'dropBody'
        }
    }

    showPerformance = () => {
        if (this.state.mold !== 'dropBody') {
            this.showMold()
            setTimeout(_ => this.showPerformance(), 500)
        }
        else if (this.state.color !== 'dropBody') {
            this.showColor()
            setTimeout(_ => this.showPerformance(), 500)
        }
        else if (this.state.performance === 'dropBody') {
            this.setState({ performance: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ performance: "dropBody dropBodyInherit dropPerformanceOpen" }), 1))
        } else {
            this.setState({ performance: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ performance: "dropBody" }), 1000))
        }
    }

    showColor = () => {
        if (this.state.mold !== 'dropBody') {
            this.showMold()
            setTimeout(_ => this.showColor(), 500)
        }
        else if (this.state.performance !== 'dropBody') {
            this.showPerformance()
            setTimeout(_ => this.showColor(), 500)
        }
        else if (this.state.color === 'dropBody') {
            this.setState({ color: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ color: "dropBody dropBodyInherit dropColorOpen" }), 1))
        } else {
            this.setState({ color: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ color: "dropBody" }), 1000))
        }
    }

    showMold = () => {
        if (this.state.performance !== 'dropBody') 
            {this.showPerformance()
                setTimeout(_=>this.showMold(),500)}
        else if (this.state.color !== 'dropBody') 
            {this.showColor()
                setTimeout(_=>this.showMold(),500)}
        else if (this.state.mold === 'dropBody') {
            this.setState({ mold: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ mold: "dropBody dropBodyInherit dropMoldOpen" }), 1))
        } else {
            this.setState({ mold: 'dropBody dropBodyInherit' },
                _ => setTimeout(() => this.setState({ mold: "dropBody" }), 1000))
        }
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
                        <h3 onClick={this.showPerformance}>Performance</h3>
                        <h2>|</h2>
                        <h3 onClick={this.showColor}>Color Options</h3>
                        <h2>|</h2>
                        <h3 onClick={this.showMold}>Insta-Mold</h3>
                    </div>
                </div>
                <div className="dropShell">
                    <div className={this.state.performance}>
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
                    <div className={this.state.color}>
                        <h2>Colors can be mixed, marbled, and tailored to your liking. Logos, decals, images, or names are also available to customize your earpieces to your personality. Chameleon Ears™ can be made with glitter and glow in the dark.</h2>
                    </div>
                    <div className={this.state.mold}>
                        <h2>Insta-Mold® Custom Molded ear pieces are created directly in your ear so you will receive the most accurately fit headphones available. This guarantees a comfortable fit for hours of use in any setting.</h2>
                    </div>
                </div>
            </div>
        )
    }
}