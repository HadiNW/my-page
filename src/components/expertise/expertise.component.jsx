import React from "react";

import "./expertise.styles.scss";
import Container from "../container/container.component";

const Expertise = () => (
  <section id="expertise">
      <div className="expertise-bg">
          <h3>STACK</h3>
      </div>
    <Container>
      <header className="expertise-header">
        <h4 className="title">Area of expertise</h4>
        <p>Here are a few technologies I've been working with recently:</p>
        <hr className="line" />
      </header>
      <div className="tech-list">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Nodejs</li>
          <li>Golang</li>
          <li>Java</li>
          <li>C++</li>
          <li>Kotlin</li>
          <li>Swift</li>
        </ul>
      </div>
    </Container>
  </section>
);

export default Expertise;
