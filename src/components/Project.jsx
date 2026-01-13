import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projects from './projectsData';

const Projects = () => {
  return (
    <>
    <Container className="py-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        {projects.map(({ id, title, description, image, live, code }) => (
          <Col md={4} key={id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={image} alt={title} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>

                <div className="d-flex flex-column gap-2 mt-3">
                  {live && (
                    <Button
                      variant="success"
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </Button>
                  )}
                  {code && (
                    <Button
                      variant="primary"
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                  )}
                  <Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outline-dark">View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    {/* Footer inline here */}
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex justify-content-center flex-column text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Mileiny Nolasco. All rights reserved.
        </p>
      </div>
    </footer>
  </>
  );



};

export default Projects;