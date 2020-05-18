import React from "react";
import Button from "../buttons/button.component";

import Container from "../container/container.component";
import Footer from "../footer/footer.component";
import ScrollButton from "../buttons/scroll-button.component";

import "./contact.styles.scss";

const Contact = () => (
  <section id="contact">
    <Container>
      <h4 className="lead">Don't hesitate to reach me out !</h4>
      <h1 className="title">Contact</h1>
      <hr className="line" />
      <div className="links">
        <div className="links-left">
          <Button className="btn-primary" title="Download My Resume" />
        </div>
        <div className="links-right">
          <Button className="btn-primary" title="Linkedin" />
          <Button className="btn-primary" title="Email" />
          <Button className="btn-primary" title="Github" />
          <Button className="btn-primary" title="Gitlab" />
        </div>
      </div>
      <ScrollButton className="scroll-button" type="scroll-up" />
      <Footer />
    </Container>
  </section>
);

export default Contact;
