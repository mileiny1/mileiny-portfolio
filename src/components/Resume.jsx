import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Certificates
import python from "../assets/certificates.jpg";
import compTIA from "../assets/CompTIA A+ ce certificate_page-0001.jpg";
import html from "../assets/certificate_of_completion_html_page-0001.jpg";
import cloud from "../assets/awscloud_page-0001.jpg";

const Resume = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <div className="container my-5 flex-grow-1">

        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3">My Certifications</h1>
          <p className="text-muted mb-4">
            Professional certifications and technical achievements
          </p>

          {/* Resume Buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">

            {/* View Resume */}
            <a
              href="/resumes.mileinyvaldez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-lg shadow-sm"
            >
              View My Resume
            </a>

            {/* Download Resume */}
            <a
              href="/resumes.mileinyvaldez.docx"
              download
              className="btn btn-success btn-lg shadow-sm"
            >
              Download My Resume
            </a>

          </div>
        </div>

        {/* Certifications Section */}
        <div className="row justify-content-center g-4 mb-5">

          {/* Python Certificate */}
          <div className="col-md-4 col-sm-6">
            <div className="card border-0 shadow-lg rounded-4 hover-scale transition h-100">
              <img
                src={python}
                alt="W3Schools Python Certification"
                className="img-fluid rounded-top-4"
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold mb-1">
                  Python Certification – W3Schools
                </h5>
              </div>
            </div>
          </div>

          {/* CompTIA A+ Certificate */}
          <div className="col-md-4 col-sm-6">
            <div className="card border-0 shadow-lg rounded-4 hover-scale transition h-100">
              <img
                src={compTIA}
                alt="CompTIA A+ Certification"
                className="img-fluid rounded-top-4"
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold mb-1">
                  CompTIA A+ Certification
                </h5>
              </div>
            </div>
          </div>

          {/* HTML Certificate */}
          <div className="col-md-4 col-sm-6">
            <div className="card border-0 shadow-lg rounded-4 hover-scale transition h-100">
              <img
                src={html}
                alt="W3Schools HTML Certification"
                className="img-fluid rounded-top-4"
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold mb-1">
                  HTML Certification – W3Schools
                </h5>
              </div>
            </div>
          </div>

          {/* AWS Cloud Practitioner */}
          <div className="col-md-4 col-sm-6">
            <div className="card border-0 shadow-lg rounded-4 hover-scale transition h-100">
              <img
                src={cloud}
                alt="AWS Certified Cloud Practitioner"
                className="img-fluid rounded-top-4"
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold mb-1">
                  AWS Certified Cloud Practitioner
                </h5>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info */}
        <div className="row g-4 justify-content-center">

          {/* Phone */}
          <div className="col-md-3 col-sm-6">
            <a href="tel:+13475969308" className="text-decoration-none">
              <div className="text-center p-4 bg-success text-white rounded-4 shadow hover-scale transition">
                <h5 className="fw-semibold mb-2">📞 Phone</h5>
                <p className="mb-0">+1 347-596-9308</p>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="col-md-3 col-sm-6">
            <div className="text-center p-4 bg-success text-white rounded-4 shadow hover-scale transition">
              <h5 className="fw-semibold mb-2">📧 Email</h5>
              <p className="mb-1">
                <a
                  href="mailto:mileinygreys_402@hotmail.com"
                  className="text-white text-decoration-none"
                >
                  mileinygreys_402@hotmail.com
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="mailto:mileinygreys@gmail.com"
                  className="text-white text-decoration-none"
                >
                  mileinygreys@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <p className="mb-0">
          © {new Date().getFullYear()} Mileiny Nolasco. All Rights Reserved.
        </p>
      </footer>

      {/* Animations */}
      <style>
        {`
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }
          .transition {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Resume;


