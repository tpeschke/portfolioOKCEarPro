import React, { Component } from 'react'


export default class LogoFade extends Component {
    constructor() {
        super()

        this.state = {
            header: 1,
            line: 1,
            subTitle1: 1,
            subTitle2: 1,
            logo: 1
        }
    }

    componentDidMount() {
        setTimeout(
            _ => this.setState({ subTitle1: 2 },
                _ => setTimeout(_ => this.setState({ subTitle1: 3 },
                    _ => setTimeout(_ => this.setState({ subTitle2: 2 },
                        _ => setTimeout(_ => this.setState({ subTitle2: 3 },
                            _ => setTimeout(_ => this.setState({ logo: 3 },
                                _ => setTimeout(_ => this.setState({ header: 2 },
                                    _ => setTimeout(_ => this.setState({ header: 3 },
                                        _ => setTimeout(_ => this.setState({ line: 2 },
                                            _ => setTimeout(_ => this.setState({ line: 3 },
                                            ), 500)
                                        ), 500)
                                    ), 1)
                                ), 250)
                            ), 1000)
                        ), 1000)
                    ), 1500)
                ), 1500)
            ), 1500)
    }

    switchCase = (section, str) => {
        if (section === 1) {
            if (str === 'logo') {
                return 'logoCover transitioner'
            } else if (str === 'header') {
                return 'header transitioner'
            } else if (str === 'line') {
                return 'line short transitioner'
            }
            return 'fadeOut subTitle1Start transitioner'
        } else if (section === 2) {
            if (str === 'subTitle1') {
                return 'subTitle1Start transitioner'
            } else if (str === 'subTitle2') {
                return 'subTitle2Start transitioner'
            } else if (str === 'logo') {
                return 'logoCover transitioner'
            } else if (str === 'header') {
                return 'header transitioner'
            } else if (str === 'line') {
                return 'line short transitioner'
            }
        } else {
            if (str === 'subTitle1') {
                return 'subTitle1End transitioner'
            } else if (str === 'subTitle2') {
                return 'subTitle2End transitioner'
            } else if (str === 'logo') {
                return 'logoCover logoRevealed transitioner'
            } else if (str === 'header') {
                return 'header headerRevealed transitioner'
            } else if (str === 'line') {
                return 'line transitioner'
            }
        }
    }

    render() {
        var { header, subTitle1, subTitle2, line, logo } = this.state

        return (
            <div className={this.props.pulse ? "logoContainer" : "logoContainer fadeOut"}>

                <div className='logo'><div className={this.switchCase(logo, 'logo')}></div></div>

                <h1 className={this.switchCase(header, 'header')}>
                    OKC EarPro</h1>

                <div className={this.switchCase(line, 'line')}></div>

                <div className="subTitle">
                    <h2 className={this.switchCase(subTitle1, 'subTitle1')}>
                        Studio Quality</h2>
                    <h2 className={this.switchCase(subTitle2, 'subTitle2')}>
                        Concert Feel</h2>
                </div>
            </div>
        )
    }
}