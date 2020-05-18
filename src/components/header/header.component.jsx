import React from "react"
import Button from "../buttons/button.component"

import "./header.styles.scss"
import Container from "../container/container.component"

const Header = () => (
    <header id="header">
        <Container>
            <nav className="main-nav">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Works</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><Button className="btn-primary" title="Download My Resume" /></li>
                </ul>
            </nav>
        </Container>
    </header>
)

export default Header