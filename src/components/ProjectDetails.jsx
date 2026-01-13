import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Button, Badge, ListGroup } from 'react-bootstrap';
import projects from './projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!project) return <h2 className="text-center mt-5">Project not found</h2>;

  const projectIndex = projects.findIndex(p => p.id === parseInt(id));
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1].id : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1].id : null;

  return (
    <>
      <Container className="py-5">
        <h2 className="mb-3 text-center">{project.title}</h2>
        <img src={project.image} alt={project.title} className="img-fluid mb-3" />

        <p><strong>Concept:</strong> {project.concept}</p>
        <p>{project.description}</p>

        <h5>Technologies Used:</h5>
        <div className="mb-3">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} bg="info" text="dark" className="me-2">{tech}</Badge>
          ))}
        </div>

        <h5>Main Features:</h5>
        <ListGroup className="mb-3">
          {project.features.map((feature, idx) => (
            <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-flex justify-content-center gap-3 mb-3">
          {project.live && <Button variant="success" href={project.live} target="_blank">Live View</Button>}
          {project.code && <Button variant="primary" href={project.code} target="_blank">View Code</Button>}
        </div>

        <div className="d-flex justify-content-between mb-3">
          {prevProject && <Button onClick={() => navigate(`/projects/${prevProject}`)}>&larr; Previous</Button>}
          {nextProject && <Button onClick={() => navigate(`/projects/${nextProject}`)}>Next &rarr;</Button>}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline-dark">Back to Projects</Button>
          </Link>
        </div>
      </Container>

      {/* Footer included directly here */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container d-flex justify-content-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Mileiny Nolasco. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ProjectDetails;

