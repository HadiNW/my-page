import React, { Component } from "react";
import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";

import "./home.styles.scss"
import Contact from "../../components/contact/contact.component";
import Expertise from "../../components/expertise/expertise.component";
import Projects from "../../components/projects/projects.component";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <main className="home">
          <Hero />
          <Expertise />
          <Projects />
          <Contact />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
