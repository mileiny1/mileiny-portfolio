import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import developerImage from '../assets/developer.jpeg';
import downloadImage from '../assets/download.jpeg';
import mongooseImage from '../assets/mongoose.png';
import pythonImage from '../assets/python.jpeg';
import reactImage from '../assets/react.png';
import djangoImage from '../assets/downloads.png';
import typescript from '../assets/typescript.png';
import sql from '../assets/sql.png';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              md={8}
              className="text-center"
              style={{
                animation: 'fadeInLeft 2s ease-in-out 0.5s',
                animationFillMode: 'both',
              }}
            >
              <h1 className="display-4" style={{ animation: 'fadeIn 2s ease-in-out 0.5s', animationFillMode: 'both' }}>
                Hi, I'm <span className="text-primary fw-bold"> Mileiny Nolasco</span>
              </h1>
              <h4 className="mb-3" style={{ animation: 'fadeIn 2s ease-in-out 0.7s', animationFillMode: 'both' }}>
                Front-End React Developer
              </h4>
              <p className="lead" style={{ animation: 'fadeIn 2s ease-in-out 0.9s', animationFillMode: 'both' }}>
                
              </p>

              {/* Center Profile Image */}
              <section className="bg-light py-5 text-center">
                <img
                  src={developerImage}
                  alt="Mileiny Nolasco"
                  className="rounded-circle shadow"
                  style={{ maxWidth: '200px', animation: 'zoomIn 1.5s ease-in-out' }}
                />
              </section>

              {/* Social Buttons */}
              <div className="mt-4">
                <Button
                  variant="dark"
                  href="https://github.com/mileiny1"
                  target="_blank"
                  className="me-2"
                  style={{ animation: 'fadeIn 2s ease-in-out 1s', animationFillMode: 'both' }}
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </Button>

                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/mileiny-nolasco-4ab943328/"
                  target="_blank"
                  className="me-2"
                  style={{ animation: 'fadeIn 2s ease-in-out 1.2s', animationFillMode: 'both' }}
                >
                  <i className="bi bi-linkedin me-1"></i> LinkedIn
                </Button>
                 <Button
    variant="success"
    href="mailto:mileinygreys@gmail.com"
    style={{ animation: 'fadeIn 2s ease-in-out 1.4s', animationFillMode: 'both' }}
  >
    <i className="bi bi-envelope me-1"></i> Get in Touch with Me
  </Button>




              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tools Gallery */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4" style={{ animation: 'fadeInDown 1.5s ease-in-out' }}>
            Tools & Technologies
          </h2>
          <Row className="justify-content-center">
            {[downloadImage, mongooseImage, pythonImage, reactImage, djangoImage, typescript, sql].map(
              (img, index) => (
                <Col
                  key={index}
                  xs={6}
                  md={3}
                  className="mb-4 text-center"
                  style={{ animation: `fadeInUp 1.5s ease-in-out ${index * 0.2}s`, animationFillMode: 'both' }}
                >
                  <img
                    src={img}
                    alt={`Tool ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4" style={{ animation: 'fadeInUp 2s ease-in-out' }}>
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Mileiny Nolasco. All rights reserved.
          </p>
        </Container>
      </footer>

      {/* Inline CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default Home;

