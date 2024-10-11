import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const imgStyle = {
    maxHeight: "300px", // Max height of the image
    width: "auto", // Auto adjust width based on height
    objectFit: "contain" // Maintain aspect ratio and fit within the container
  };

  return (
    <Card className="project-card-view">
      <Carousel>
        {props.imgPaths.map((imgPath, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imgPath}
              alt={`Slide ${index}`}
              style={imgStyle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
         
        {"\n"}
        {"\n"}

        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
