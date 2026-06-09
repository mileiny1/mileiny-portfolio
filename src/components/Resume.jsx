import React from "react";

// Certificates
import python from "../assets/certificates.jpg";
import compTIA from "../assets/CompTIA A+ ce certificate_page-0001.jpg";
import html from "../assets/certificate_of_completion_html_page-0001.jpg";
import cloud from "../assets/awscloud_page-0001.jpg";

const certs = [
  { src: python, alt: "W3Schools Python Certification", label: "Python", issuer: "W3Schools" },
  { src: compTIA, alt: "CompTIA A+ Certification", label: "CompTIA A+", issuer: "CompTIA" },
  { src: html, alt: "W3Schools HTML Certification", label: "HTML", issuer: "W3Schools" },
  { src: cloud, alt: "AWS Certified Cloud Practitioner", label: "Cloud Practitioner", issuer: "Amazon Web Services" },
];

const Resume = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rv-root { background: #f7f5f1; color: #1a1814; }

        /* ── HERO ── */
        .rv-hero {
          padding: 80px 48px 64px;
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .rv-hero-text {}
        .rv-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a7268;
          margin-bottom: 14px;
        }
        .rv-hero h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 400;
          line-height: 1.05;
          color: #1a1814;
          margin-bottom: 16px;
        }
        .rv-hero h1 em {
          font-style: italic;
          color: #4a7c59;
        }
        .rv-hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: #5a5650;
          max-width: 400px;
          line-height: 1.65;
        }
        .rv-hero-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
        .rv-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: #1a1814;
          color: #f7f5f1;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          border-radius: 4px;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .rv-btn-primary:hover { background: #4a7c59; transform: translateY(-1px); }
        .rv-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: transparent;
          color: #1a1814;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          border-radius: 4px;
          border: 1.5px solid #c8c4bc;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .rv-btn-outline:hover { border-color: #1a1814; transform: translateY(-1px); }

        /* ── DIVIDER ── */
        .rv-rule { border: none; border-top: 1px solid #d8d4cc; margin: 0 48px; }

        /* ── GRID ── */
        .rv-section {
          max-width: 1080px;
          margin: 0 auto;
          padding: 64px 48px;
        }
        .rv-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a7268;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .rv-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #d8d4cc;
        }

        .rv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: #d8d4cc;
          border: 1px solid #d8d4cc;
          border-radius: 12px;
          overflow: hidden;
        }
        .rv-card {
          background: #f7f5f1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
          cursor: default;
        }
        .rv-card:hover { background: #fff; }
        .rv-card:hover .rv-card-img { transform: scale(1.03); }
        .rv-card-img-wrap {
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #ede9e2;
        }
        .rv-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
        }
        .rv-card-body {
          padding: 18px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rv-card-issuer {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7a7268;
        }
        .rv-card-name {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #1a1814;
          line-height: 1.2;
        }
        .rv-card-badge {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: #4a7c59;
          letter-spacing: 0.04em;
        }
        .rv-card-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          flex-shrink: 0;
        }

        /* ── CONTACT ── */
        .rv-contact-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .rv-contact-card {
          flex: 1;
          min-width: 200px;
          background: #1a1814;
          color: #f7f5f1;
          border-radius: 8px;
          padding: 28px 28px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: block;
        }
        .rv-contact-card:hover { background: #4a7c59; transform: translateY(-2px); }
        .rv-contact-type {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8a8680;
          margin-bottom: 8px;
        }
        .rv-contact-card:hover .rv-contact-type { color: #a0c8b0; }
        .rv-contact-val {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          color: #f7f5f1;
        }

        /* ── FOOTER ── */
        .rv-footer {
          margin-top: auto;
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
        }
        .rv-footer-nav { display: flex; gap: 24px; }
        .rv-footer-nav a {
          font-size: 13px;
          color: #5a5650;
          text-decoration: none;
          transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #4a7c59;
          background: #e4efe8;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 640px) {
          .rv-hero, .rv-section { padding-left: 24px; padding-right: 24px; }
          .rv-rule { margin-left: 24px; margin-right: 24px; }
          .rv-hero { padding-top: 48px; }
          .rv-footer { padding: 20px 24px; }
        }
      `}</style>

      <div className="rv-root" style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Hero */}
        <div className="rv-hero">
          <div className="rv-hero-text">
            <p className="rv-eyebrow">Portfolio — Mileiny Nolasco</p>
            <h1>Credentials &<br /><em>Certifications</em></h1>
            <p className="rv-hero-sub">Professional certifications and technical achievements across cloud, systems, and web development.</p>
          </div>
          <div className="rv-hero-actions">
            <a href="/resumes.mileinyvaldez.pdf" target="_blank" rel="noopener noreferrer" className="rv-btn-primary">
              ↗ View Resume
            </a>
            <a href="/resumes.mileinyvaldez.docx" download className="rv-btn-outline">
              ↓ Download .docx
            </a>
          </div>
        </div>

        <hr className="rv-rule" />

        {/* Certifications Grid */}
        <div className="rv-section">
          <p className="rv-section-label">Certifications</p>
          <div className="rv-grid">
            {certs.map((cert) => (
              <div className="rv-card" key={cert.label}>
                <div className="rv-card-img-wrap">
                  <img src={cert.src} alt={cert.alt} className="rv-card-img" />
                </div>
                <div className="rv-card-body">
                  <p className="rv-card-issuer">{cert.issuer}</p>
                  <p className="rv-card-name">{cert.label}</p>
                  <p className="rv-card-badge">Verified</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="rv-rule" />

        {/* Contact */}
        <div className="rv-section" style={{ paddingTop: 48, paddingBottom: 72 }}>
          <p className="rv-section-label">Get in Touch</p>
          <div className="rv-contact-row">
            <a href="tel:+13475969308" className="rv-contact-card">
              <p className="rv-contact-type">Phone</p>
              <p className="rv-contact-val">+1 347-596-9308</p>
            </a>
            <div className="rv-contact-card" style={{ cursor: "default" }}>
              <p className="rv-contact-type">Email</p>
              <p className="rv-contact-val">
                <a href="mailto:mileinygreys_402@hotmail.com" style={{ color: "inherit", textDecoration: "none", display: "block" }}>mileinygreys_402@hotmail.com</a>
                <a href="mailto:mileinygreys@gmail.com" style={{ color: "inherit", textDecoration: "none", display: "block" }}>mileinygreys@gmail.com</a>
              </p>
            </div>
            <a href="https://github.com/mileiny1" target="_blank" rel="noreferrer" className="rv-contact-card">
              <p className="rv-contact-type">GitHub</p>
              <p className="rv-contact-val">github.com/mileiny1</p>
            </a>
            <a href="https://www.linkedin.com/in/mileiny-nolasco-4ab943328/" target="_blank" rel="noreferrer" className="rv-contact-card">
              <p className="rv-contact-type">LinkedIn</p>
              <p className="rv-contact-val">Mileiny Nolasco</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="rv-footer">
          <nav className="rv-footer-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
          </nav>
          <div className="rv-footer-right">
            <span className="rv-open-badge">Open to work</span>
            <span className="rv-footer-copy">© {new Date().getFullYear()} Mileiny Nolasco</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Resume;

