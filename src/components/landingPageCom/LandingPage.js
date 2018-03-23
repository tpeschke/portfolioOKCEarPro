import React, { Component } from 'react'

import BottomPulse from './BottomPulse'
import LogoFade from './LogoFade'

export default class LandingPage extends Component {
    constructor() {
        super()

        this.state = {
            width: 0,
            divNum: [],
            pulse: false
        }
    }

    componentDidMount() {
        var width = Math.floor(document.getElementsByClassName('landingPage')[0].clientWidth/30);
        var tempArr = []
        for (let i = 0; i < width; i++) {
            tempArr.push(1)
        }
        this.setState({ divNum: tempArr, width: width })
        setTimeout(_ => {
            this.setState({ pulse: true })
        }, width * 44)

    }

    render() {
        return (
            <div className="landingPage">

                <LogoFade
                    pulse={this.state.pulse} />

                    <BottomPulse
                        divNum={this.state.divNum} />
            </div>
        )
    }
}