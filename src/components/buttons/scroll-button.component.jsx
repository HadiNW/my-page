import React from "react"

import "./scroll-button.styles.scss"

const ScrollButton = ({type}) => (
   <a href="/" className="scroll-button"><i className={`fas fa-arrow-${ type && type === "scroll-up" ? 'up':'down'}`}></i></a>
)

export default ScrollButton