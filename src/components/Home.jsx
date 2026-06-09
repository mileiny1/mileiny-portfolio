import React from 'react';
import { Link } from 'react-router-dom';
import developerImage from '../assets/developer.jpeg';
import downloadImage from '../assets/download.jpeg';
import mongooseImage from '../assets/mongoose.png';
import pythonImage from '../assets/python.jpeg';
import reactImage from '../assets/react.png';
import djangoImage from '../assets/downloads.png';
import node from '../assets/node.jpeg';
import sql from '../assets/sql.png';
import express from '../assets/express.jpeg';
import postman from '../assets/postman.png';
import cypress from '../assets/cypress.png';
import booststrap from '../assets/boostrap.jpeg';
import heroku from '../assets/heroku.png';
import vercel from '../assets/vercel.png';

const tools = [
  { img: downloadImage, name: 'HTML, CSS, JavaScript' },
  { img: mongooseImage, name: 'Mongoose' },
  { img: pythonImage,   name: 'Python' },
  { img: reactImage,    name: 'React' },
  { img: djangoImage,   name: 'Django' },
  { img: node,          name: 'Node.js' },
  { img: sql,           name: 'SQL' },
  { img: express,       name: 'Express' },
  { img: booststrap,    name: 'Bootstrap' },
  { img: heroku,        name: 'Heroku' },
  { img: vercel,        name: 'Vercel' },
];

const testingTools = [
  { img: postman,  name: 'Postman' },
  { img: cypress,  name: 'Cypress' },
];

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .h-section {
          min-height: 100vh;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .h-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 50% 40%, #dbeafe55 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 90%, #eff6ff44 0%, transparent 60%);
          pointer-events: none;
        }
        .h-inner {
          position: relative;
          z-index: 1;
          max-width: 600px;
          width: 100%;
        }
        .h-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 22px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.1s;
        }
        .h-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.45; transform: scale(0.8); }
        }
        .h-title {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.2s;
        }
        .h-title span { color: #2563eb; }
        .h-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #64748b;
          letter-spacing: 0.02em;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.3s;
        }
        .h-avatar-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 36px;
          opacity: 0;
          animation: zoomIn 0.7s ease forwards 0.35s;
        }
        .h-avatar {
          width: 170px; height: 170px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 0 0 5px #dbeafe, 0 16px 40px rgba(37,99,235,0.12);
          display: block;
        }
        .h-avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px dashed #93c5fd;
          animation: spin 18s linear infinite;
          pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .h-status {
          position: absolute;
          bottom: 6px; right: -8px;
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 4px 11px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px; font-weight: 500;
          color: #1a1a1a;
          display: flex; align-items: center; gap: 5px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .h-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e;
        }
        .h-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.55s;
        }
        .h-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px;
          border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          transition: transform 0.18s, box-shadow 0.18s, background 0.18s, border-color 0.18s;
          cursor: pointer;
          border: 1px solid transparent;
          letter-spacing: 0.01em;
        }
        .h-btn:hover { transform: translateY(-2px); }
        .h-btn-dark {
          background: #0f172a; color: #fff;
          box-shadow: 0 2px 8px rgba(15,23,42,0.18);
        }
        .h-btn-dark:hover { background: #1e293b; box-shadow: 0 6px 18px rgba(15,23,42,0.22); }
        .h-btn-blue {
          background: #2563eb; color: #fff;
          box-shadow: 0 2px 8px rgba(37,99,235,0.22);
        }
        .h-btn-blue:hover { background: #1d4ed8; box-shadow: 0 6px 18px rgba(37,99,235,0.3); }
        .h-btn-green {
          background: #f0fdf4; color: #166534;
          border-color: #bbf7d0;
        }
        .h-btn-green:hover { background: #dcfce7; border-color: #86efac; }

        /* ── TOOLS SECTION ── */
        .t-section {
          padding: 72px 24px;
          background: #f8fafc;
          border-top: 0.5px solid #e8e8e8;
        }
        .t-inner { max-width: 860px; margin: 0 auto; }
        .t-label {
          text-align: center;
          font-family: 'Manrope', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px;
        }
        .t-heading {
          font-family: 'Lora', serif;
          font-size: 26px; font-weight: 600;
          color: #0f172a; text-align: center;
          letter-spacing: -0.02em; margin-bottom: 48px;
        }
        .t-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
          gap: 14px;
        }
        .t-card {
          background: #fff;
          border: 0.5px solid #e8e8e8;
          border-radius: 14px;
          padding: 22px 12px 16px;
          text-align: center;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .t-card:hover {
          transform: translateY(-4px);
          border-color: #bfdbfe;
          box-shadow: 0 8px 24px rgba(37,99,235,0.08);
        }
        .t-img {
          width: 56px; height: 56px;
          object-fit: contain;
          margin: 0 auto 12px;
          display: block;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
          transition: transform 0.2s;
        }
        .t-card:hover .t-img { transform: scale(1.08); }
        .t-name {
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 500;
          color: #374151;
        }

        /* ── TESTING SECTION ── */
        .test-section {
          padding: 72px 24px;
          background: #fff;
          border-top: 0.5px solid #e8e8e8;
        }
        .test-inner { max-width: 860px; margin: 0 auto; }
        .test-label {
          text-align: center;
          font-family: 'Manrope', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px;
        }
        .test-heading {
          font-family: 'Lora', serif;
          font-size: 26px; font-weight: 600;
          color: #0f172a; text-align: center;
          letter-spacing: -0.02em; margin-bottom: 48px;
        }
        .test-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
          max-width: 400px;
          margin: 0 auto;
        }
        .test-card {
          background: #fff;
          border: 0.5px solid #e8e8e8;
          border-radius: 14px;
          padding: 22px 12px 16px;
          text-align: center;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .test-card:hover {
          transform: translateY(-4px);
          border-color: #bfdbfe;
          box-shadow: 0 8px 24px rgba(37,99,235,0.08);
        }
        .test-img {
          width: 56px; height: 56px;
          object-fit: contain;
          margin: 0 auto 12px;
          display: block;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
          transition: transform 0.2s;
        }
        .test-card:hover .test-img { transform: scale(1.08); }
        .test-name {
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 500;
          color: #374151;
        }

        /* ── FOOTER (matches Resume page) ── */
        .rv-footer {
          border-top: 1px solid #d8d4cc;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f0ede6;
          font-family: 'Manrope', sans-serif;
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
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.82); }
          to   { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .rv-footer { padding: 20px 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="h-section">
        <div className="h-inner">
          <div className="h-eyebrow">
            <div className="h-eyebrow-dot" />
            Full Stack Developer
          </div>
          <h1 className="h-title">
            Hi, I'm<br /><span>Mileiny Nolasco</span>
          </h1>
          <p className="h-subtitle">Building clean, performant web experiences.</p>
          <div className="h-avatar-wrap">
            <div className="h-avatar-ring" />
            <img src={developerImage} alt="Mileiny Nolasco" className="h-avatar" />
            <div className="h-status">
              <div className="h-status-dot" />
              Open to work
            </div>
          </div>
          <div className="h-buttons">
            <a className="h-btn h-btn-dark" href="https://github.com/mileiny1" target="_blank" rel="noreferrer">
              <i className="bi bi-github" /> GitHub
            </a>
            <a className="h-btn h-btn-blue" href="https://www.linkedin.com/in/mileiny-nolasco-4ab943328/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" /> LinkedIn
            </a>
            <a className="h-btn h-btn-green" href="mailto:mileinygreys@gmail.com">
              <i className="bi bi-envelope" /> Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="t-section">
        <div className="t-inner">
          <p className="t-label">Stack</p>
          <h2 className="t-heading">Tools &amp; Technologies</h2>
          <div className="t-grid">
            {tools.map(({ img, name }, i) => (
              <div
                className="t-card"
                key={name}
                style={{ animation: `fadeUp 0.5s ease both ${0.05 + i * 0.07}s` }}
              >
                <img src={img} alt={name} className="t-img" />
                <div className="t-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIT TESTING ── */}
      <section className="test-section">
        <div className="test-inner">
          <p className="test-label">Quality Assurance</p>
          <h2 className="test-heading">Unit Testing</h2>
          <div className="test-grid">
            {testingTools.map(({ img, name }, i) => (
              <div
                className="test-card"
                key={name}
                style={{ animation: `fadeUp 0.5s ease both ${0.05 + i * 0.07}s` }}
              >
                <img src={img} alt={name} className="test-img" />
                <div className="test-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="rv-footer">
        <nav className="rv-footer-nav">
         <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/resume">Resume</Link>
        </nav>
        <div className="rv-footer-right">
          <span className="rv-open-badge">Open to work</span>
          <span className="rv-footer-copy">© {new Date().getFullYear()} Mileiny Nolasco</span>
        </div>
      </footer>
    </>
  );
};

export default Home;