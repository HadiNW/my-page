import React from 'react'

import Container from '../container/container.component'

import './hero.styles.scss'
import Button from '../buttons/button.component'
import ScrollButton from '../buttons/scroll-button.component'
import Header from '../header/header.component'

const Hero = () => (
  <React.Fragment>
    <div className="hero">
      <div className="shapes">
        <div className="circle-right"/>
        <div className="circle-left"/>
        <div className="titles">
			 <h1>fullstack</h1>
			 <h1>developer</h1>
		</div>
      </div>
      <Header />
      <Container>
        <div className="hero-content">
          <h4 className="welcome">
            Hi
            <span aria-label="emoji" role="img">
              👋
            </span>
            , welcome to my page
          </h4>
          <h1 className="welcome-name">I’m Hadi Nur Wahid</h1>
          <hr className="line" />
          <p className="welcome-description">
            I’m a full-stack software engineer focusing on cutting edge
            technologies. I mostly write code in Node.js, Golang, React.js. I
            like to write clean and testable code. I strongly believe that
            continuous learning is almost the only way to successfully evolve
            and grow.
          </p>
          <Button
            className="btn-primary btn-contact"
            title="Fell free to reach me"
          />
        </div>
        <ScrollButton className="scroll-button" />
      </Container>
    </div>
  </React.Fragment>
)

export default Hero
