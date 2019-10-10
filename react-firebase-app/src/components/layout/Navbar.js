import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper  darken-3">
                <div className= "container">
                    <Link to= '/' className="brand-logo">React-firebase</Link>
                    <SignedInLink />
                    <SignedOutLink />
                </div>
           </div>
        </nav>
    )
}

export default Navbar;
