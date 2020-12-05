import React from "react";
import "./App.css";
import myProject from "./data/data";

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      {/* git credentials  solved*/}
      {/* project/asfands-porfolio */}
      <nav id="nav" className="navbar fixed-top navbar-light bg-dark">
        <h3>
          <i class="fab fa-product-hunt"></i>ortfolio
        </h3>
        <ul>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li></li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* sidebar */}
      <div className="sidenav">
        <h3>Asfand yar</h3>
        <h2>
          <i>Software Engineer</i>
        </h2>
        <h3>Full Stack </h3>
        <h5> MERN Stack Developer</h5>
        <h6>Experties in </h6>
        <b>
          <p>React,Redux</p>
          <p>Node,Express,MongoDB</p>
          <p>Firebase</p>
        </b>
        <br />

        <div id="sideicon">
          <a href="https://www.facebook.com/aliasfandali" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/asfand-yar-9b5049155/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/AsfandYar2" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      {/* main body */}
      <span id="about"></span>
      <hr />
      <div className="main sidenav-trigger">
        <img
          id="img"
          className="rounded-circle mx-auto d-block"
          src="images/asfand2.jpg"
          alt="img"
        />
        <div id="imgtxt">
          <h5>Hello I'm</h5>
          <h2>Asfand Yar</h2>
          <pre style={{ fontFamily: "ariel" }}>
            I am highly motivated software developer,keenly cracking the new
            innovations and
            <br /> advanced software system practice and practicals are all hand
            in hand enhancing my skills,
            <br />
            <p style={{ background: "rgb(239, 244, 247)" }}>
              {" "}
              I am right know keeping myself abreast of new programming
              techniques <br />
              and know how the system works.
              <br />
            </p>
          </pre>
          Best experienced in Web App Development.
          <br />
          <h4 id="Projects">
            MERN Stack(Mongodb,Express,ReactJs,NodeJs) Development
          </h4>
          <hr />
        </div>
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <br />
        {/* projects body */}
        <div className="row">
          {myProject.map((project) => {
            return (
              <div id="projects" className="col-md-6 container">
                <div className="card bg-light">
                  <p style={{ textAlign: "center" }}>
                    <b>{project.name}</b>
                  </p>
                  <img
                    src={project.img}
                    className=" mx-auto d-block"
                    alt="img"
                  />
                  <div className="card-body">
                    <i>
                      <h3 style={{ opacity: 0.6 }}>{project.description}</h3>
                    </i>
                    <a href={project.projectPage} target="_blank">
                      <button className="btn btn-success btn-block">
                        Live Demo
                      </button>
                    </a>
                    <a href={project.projectCode} target="_blank">
                      <button className="btn btn-secondary btn-block">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="resume container">
          <p style={{ textAlign: "center" }}>Resume</p>

          <img
            src="images/resume.JPG"
            alt="resume"
            className=" mx-auto d-block resume-img"
          />
          <a
            href="images/resume.pdf"
            target="_blank"
            className="btn btn-primary"
            style={{ marginRight: "30px", float: "right" }}
          >
            See Resume
          </a>
        </div>
      </div>
      {/* contact footer */}
      <span id="contact"></span>
      <br />
      <hr />
      <div class="footer">
        <div className="row">
          <div className="col-md-6">
            <h1>Contact Details</h1>
            <p>
              <i class="material-icons">call</i>
              <i>+923057575018</i>
            </p>
            <p>
              <i class="material-icons">email</i> <i>asfi.official@gmail.com</i>
            </p>
            <p>
              <i class="material-icons">location_on</i>
              <i>Lahore,Pakistan</i>
            </p>
            <p>Map is Loading..</p>
          </div>
          <div id="footericon" className="col-md-6">
            <h1>About Us</h1>
            <p>Detail description of us is loading will be seen very soon..</p>
            <a href="https://github.com/AsfandYar2" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/asfand-yar-9b5049155/"
              target="_blank"
            >
              {" "}
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/aliasfandali" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div class="foooter">
        <p style={{ textAlign: "Right", opacity: ".1" }}>
          Copyright ©2019 All rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;
