import React from "react";

import sony from "../../assets/img/sony.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";

import "./projects.styles.scss";
import Container from "../container/container.component";
import Button from "../buttons/button.component";

const Projects = () => (
  <section id="projects">
    <Container>
      <header className="projects-header">
        <div className="title">Some of works</div>
        <p>Here are some of my projects</p>
        <hr className="line" />
      </header>
    </Container>
    <div className="project-items">
      <div className="project-wrapper-left">
        <div className="square"></div>
        <Container>
          <div className="project-item">
            <div className="project-text">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
            <div className="project-img">
              <img src={sony} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <div className="project-wrapper-right">
        <div className="square"></div>
        <Container>
          <div className="project-item">
            <div className="project-img">
              <img src={img2} alt="img" />
            </div>
            <div className="project-text">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="project-wrapper-left">
        <div className="square"></div>
        <Container>
          <div className="project-item">
            <div className="project-text">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
            <div className="project-img">
              <img src={img3} alt="img" />
            </div>
          </div>
        </Container>
      </div>

    </div>
    <Button className="btn-primary loadmore" title="Load More" />
  </section>
);

export default Projects;
