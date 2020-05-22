import React from 'react'

import sony from '../../assets/img/sony.svg'
import img2 from '../../assets/img/img2.svg'
import img3 from '../../assets/img/img3.svg'

import './projects.styles.scss'
import Container from '../container/container.component'
import Button from '../buttons/button.component'

const Projects = () => (
  <section id="projects">
    <Container>
      <div className="title">
        <h3>Works</h3>
        <h4>Area of expertise</h4>
        <p>Here are a few technologies I've been working with recently:</p>
        <hr className="line" />
      </div>
    </Container>
    <div className="projects">
      <div className="project">
        <div className="square"/>
        <Container>
          <div className="work">
            <div className="texts">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
            <div className="media">
              <img src={sony} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <div className="project">
        <div className="square"/>
        <Container>
          <div className="work">
            <div className="texts">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
            <div className="media">
              <img src={img2} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <div className="project">
        <div className="square"/>
        <Container>
          <div className="work">
            <div className="texts">
              <h2>Aplikasi musik ke headset sony</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt eligendi mollitia similique tenetur voluptatum
                distinctio illum libero aspernatur rerum?
              </p>
            </div>
            <div className="media">
              <img src={img3} alt="img" />
            </div>
          </div>
        </Container>
      </div>
    </div>
    <Button className="btn-primary loadmore" title="Load More" />
  </section>
)

export default Projects
