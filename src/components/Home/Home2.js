import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/az.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          <p> I'm a software engineering student excited about the world of web and mobile development.</p> 
           <p>I'm currently building my foundation in the essential tools and technologies required to create web and mobile applications.</p>   <p>   And I'm always looking for opportunities to expand my knowledge and explore new approaches. I'm a fast learner and a team player, eager to contribute to creating engaging web and mobile experiences. </p>        <br /><br />

         
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img
            src={myImg}
            className="img-fluid"
            alt="avatar"
            style={{ borderRadius: '50%' }}
          />
        </Tilt>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
         
            
           
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/mohamed-aziz-louati-10297b257/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          
        </ul>
      </Col>
    </Row>
  </Container>
</Container>
  );
}
export default Home2;
