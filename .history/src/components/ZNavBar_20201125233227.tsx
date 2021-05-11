import React, { useState } from 'react'

function ZNavBar() {

    const navLinks = [
        { title: `about us`, path: `/aboutUs` },
        { title: `sign up!`, path: `/signUp` },
        { title: `our solution`, path: `/ourSolution` },
        { title: `our partners`, path: `/ourPartner` },
        { title: `rsources`, path: `/resource` },
        { title: `press`, path: `/press` },
        { title: `blog`, path: `/blog` },
        { title: `contact`, path: `/contact` },
    return (
        <>
            <nav className="navbar">
                <div className="navebar-container">
                    {/* <Link tp="/" clasName="navbar-logo" >
                        
                    </Link> */}
                </div>
            </nav>
        </>
    )
}

export default ZNavBar
