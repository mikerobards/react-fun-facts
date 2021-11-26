import React from 'react'
import logo from '../img/react-logo.png'


export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="react logo" className="logo" />
            <h3 className="logo-title">ReactFacts</h3>
            <h4 className="project-title">React Course - Project 1</h4>
        </nav>
    )
}