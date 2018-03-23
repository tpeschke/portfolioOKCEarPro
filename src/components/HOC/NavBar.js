import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            show: false,
            route: 'home',
            menu: true
        }
    }

    componentDidMount() {
        setTimeout(_ => this.setState({ show: true }), 500)
        this.setState({ route: this.props.location.pathname })
    }

    componentWillReceiveProps(next) {
        this.setState({ route: next.location.pathname })
    }

    render() {
        var { route } = this.state

        return (
            <div>
                <div className={this.state.show ? 'navBarOuter navReveal' : 'navBarOuter'} id="Bar">
                    <Link to="/"><h3 className={route === '/' ? 'active' : ''}>HOME</h3></Link>
                    <h2>|</h2>
                    <Link to="/products"><h3 className={route === '/products' ? 'active' : ''}>PRODUCTS</h3></Link>
                    <h2>|</h2>
                    <Link to="/professional"><h3 className={route === '/professional' ? 'active' : ''}>PROFESSIONAL</h3></Link>
                    <h2>|</h2>
                    <Link to="/personal"><h3 className={route === '/personal' ? 'active' : ''}>PERSONAL</h3></Link>
                    <h2>|</h2>
                    <Link to="/aboutus"><h3 className={route === '/aboutus' ? 'active' : ''}>ABOUT US</h3></Link>
                    <h2>|</h2>
                    <Link to="/contact"><h3 className={route === '/contact' ? 'active' : ''}>CONTACT</h3></Link>
                </div>
                <div className={this.state.show ? 'navBarOuter navReveal' : 'navBarOuter'} id="menu">
                    <div className="navMenuHolder" onClick={_ => this.setState({ menu: !this.state.menu })}>
                        <div className={this.state.menu ? "navMenuBar" : "navMenuBar navMenuBarOpen1"}></div>
                        <div className={this.state.menu ? "navMenuBar" : "navMenuBar navMenuBarOpen2"}></div>
                        <div className={this.state.menu ? "navMenuBar" : "navMenuBar navMenuBarOpen3"}></div>
                    </div>

                    <div className={this.state.menu ? "navMenuCover navMenuCoverHide" : "navMenuCover"}>
                        <div className="navMenuCoverContainer">
                            <Link to="/"><h3 className={route === '/' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>HOME</h3></Link>
                            <Link to="/products"><h3 className={route === '/products' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>PRODUCTS</h3></Link>
                            <Link to="/professional"><h3 className={route === '/professional' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>PROFESSIONAL</h3></Link>
                            <Link to="/personal"><h3 className={route === '/personal' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>PERSONAL</h3></Link>
                            <Link to="/aboutus"><h3 className={route === '/aboutus' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>ABOUT US</h3></Link>
                            <Link to="/contact"><h3 className={route === '/contact' ? 'active' : ''} onClick={_ => this.setState({ menu: !this.state.menu })}>CONTACT</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)