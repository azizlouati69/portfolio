import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
 
import Particle from "../Particle";
import r1 from "../../Assets/Projects/r1.png";
import r2 from "../../Assets/Projects/r2.png";
import r3 from "../../Assets/Projects/r3.png";
import r4 from "../../Assets/Projects/r4.png";
import r5 from "../../Assets/Projects/r5.png";
import r6 from "../../Assets/Projects/r6.png";
import r7 from "../../Assets/Projects/r7.png";
import p1 from "../../Assets/Projects/s1.jpg";
import p8 from "../../Assets/Projects/s8.jpg";
import papri9 from "../../Assets/Projects/papri90.png";
import papri10 from "../../Assets/Projects/papri10.jpg";
import papri11 from "../../Assets/Projects/papri11.jpg";
import papri12 from "../../Assets/Projects/papri12.jpg";
import papri13 from "../../Assets/Projects/papri13.jpg";
import papri14 from "../../Assets/Projects/papri14.jpg";
import papri15 from "../../Assets/Projects/papri15.jpg";
import papri16 from "../../Assets/Projects/papri16.jpg";
import papri17 from "../../Assets/Projects/papri17.jpg";

 

import p2 from "../../Assets/Projects/s2.jpg";
import p3 from "../../Assets/Projects/s3.jpg";
import p4 from "../../Assets/Projects/s4.jpg";
import p5 from "../../Assets/Projects/s5.jpg";
import p6 from "../../Assets/Projects/s6.jpg";
import p7 from "../../Assets/Projects/s7.jpg";
 
import f1 from "../../Assets/Projects/1.png";
import f2 from "../../Assets/Projects/2.png";

import f0 from "../../Assets/Projects/f1.png";
 
import f3 from "../../Assets/Projects/3.png";
import f4 from "../../Assets/Projects/4.png";
  
import el1 from "../../Assets/Projects/el1.png";
import el2 from "../../Assets/Projects/el2.png";
import el3 from "../../Assets/Projects/el3.png";
import el4 from "../../Assets/Projects/el4.png";
import el5 from "../../Assets/Projects/el5.png";
  
import mt0 from "../../Assets/Projects/mt0.png";
import mt1 from "../../Assets/Projects/mt1.png";
import mt2 from "../../Assets/Projects/mt2.png";
import mt3 from "../../Assets/Projects/mt3.png";


import sw1 from "../../Assets/Projects//sw1.png";
import sw2 from "../../Assets/Projects/sw2.png";
import sw3 from "../../Assets/Projects/sw3.png";
import sw4 from "../../Assets/Projects/sw4.png";
import sw5 from "../../Assets/Projects/sw5.png";
import sw6 from "../../Assets/Projects/sw6.png";
import sw7 from "../../Assets/Projects/sw7.png";

 
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[el1,el2,el3,el4,el5]}
              isBlog={false}
              title="ENICARTHAGE LIBRARY"
              description="A website constructed with Angular and SpringBoot, provides a comprehensive solution for a college library management, enabling streamlined cataloging, borrowing  also offering visibility into upcoming events. . "
              
               
            />
          </Col>
         
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[sw1,sw2,sw3,sw4,sw5,sw6,sw7]}
              isBlog={false}
              title="STUDY WAVE"
              description="An e-learning platform built using the MERN stack, designed to deliver educational content and facilitate remote learning experiences. It provides a user-friendly interface for accessing educational materials. "
             
            />
          </Col>
         
          
         
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[r1,r2,r3,r4,r5,r6,r7]}
              isBlog={false}
              title="TASTY"
              description="A website developed with React.js ,  provides a comprehensive overview of the restaurant . It also showcases the menu with detailed descriptions and pricing "
               
              
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[papri10,papri11,papri13,papri15,papri16,papri14,papri9,papri12,papri17]}
              isBlog={false}
              title="PROFINDER"
              description="A mobile app developed using React Native and Firebase, enabling service providers to showcase their services. Clients can easily browse through available providers, view service offerings, and book appointments directly through the app."
             
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[f0,f1,f2,f3,f4 ]}
              isBlog={false}
              title="HEALTH CODE"
              description="A mobile app made with Flutter that helps patients find doctors and book appointments, simplifying the process of managing healthcare needs and improving access to medical professionals."
              
               
            />
            
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPaths={[mt0,mt1,mt2,mt3]}
              isBlog={false}
              title="MONEY TRACKER"
              description="A React Native and Firebase mobile app that allows users to track their daily spending. With a simple and intuitive interface, users can easily log their expenses and keep a daily record of their financial activities. "
             
            />
          </Col>

         


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
