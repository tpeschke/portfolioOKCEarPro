import React from 'react'
import NavBar from './NavBar'

const NavBarShell = Page => {
    return props =>
        <div>
                <NavBar />
                <Page {...props} />
        </div>
    
            }
            
export default NavBarShell