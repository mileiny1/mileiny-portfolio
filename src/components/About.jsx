import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import myphoto from '../assets/myphoto.jpg';


const About = () => {
  return (
    <>
     <Container className="py-5 animate__animated animate__fadeIn">
  <h2 className="fw-bold mb-4 animate__animated animate__fadeInDown">
    About Me
  </h2>

        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <Image
              src={myphoto}
              alt="Mileiny Nolasco"
              fluid
              style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Column: Description */}
          <div className="col-md-6">
            <p
  className="fw-normal lh-base"
  style={{ 
    fontFamily: "Times New Roman, serif", 
    fontSize: "35px", // fixed font size of 20px
    lineHeight: 1.6,  // good readability
  }}
>
  Mileiny Nolasco is a software engineer, creative thinker, and jet ski enthusiast. 
  With three years of college-level study and a strong foundation of self-taught knowledge 
  in computer science, she made the decision to transition from her role as a Nursing Assistant 
  to pursue a career in tech. Throughout her journey, Mileiny has relied on her creativity and 
  problem-solving skills to craft solutions that are both innovative and uniquely tailored 
  to each user's needs.
</p>
          </div>
        </div>
      </Container>

      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container d-flex justify-content-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Mileiny Nolasco. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;

