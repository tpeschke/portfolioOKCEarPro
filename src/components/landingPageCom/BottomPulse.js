import React, { Component } from 'react'


export default class BottomPulse extends Component {

    render() {
        var showDiv = this.props.divNum.map((val, i) => {
            return <div key={i} className='bar'></div>
        })

        return (
                <div className="bars" >
                    {showDiv}
                </div>
        )
    }
}