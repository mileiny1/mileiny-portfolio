import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './projectsData';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pr-page {
          background: #f8fafc;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HEADER ── */
        .pr-header {
          background: #fff;
          padding: 80px 32px 64px;
          position: relative;
          overflow: hidden;
          border-bottom: 0.5px solid #e8e8e8;
        }
        .pr-header::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 95% 10%, #dbeafe55 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 0% 100%, #eff6ff44 0%, transparent 60%);
          pointer-events: none;
        }

        .pr-header-deco {
          position: absolute;
          right: 32px; top: 50%;
          transform: translateY(-50%);
          font-family: 'Lora', serif;
          font-size: clamp(80px, 14vw, 160px);
          font-weight: 600;
          color: #eff6ff;
          letter-spacing: -0.04em;
          user-select: none;
          line-height: 1;
          pointer-events: none;
        }

        .pr-header-inner {
          max-width: 900px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .pr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .pr-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(0.75); }
        }
        .pr-heading {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 600; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.025em;
          margin-bottom: 16px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.18s;
        }
        .pr-heading em { color: #2563eb; font-style: italic; }
        .pr-subheading {
          font-size: 15px; color: #64748b; line-height: 1.7;
          max-width: 440px; font-weight: 400;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.28s;
        }
        .pr-count {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 24px;
          background: #eff6ff;
          border: 0.5px solid #bfdbfe;
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12px; font-weight: 500; color: #1d4ed8;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.36s;
        }

        /* ── GRID SECTION ── */
        .pr-section { padding: 52px 32px 80px; }
        .pr-grid {
          max-width: 900px; margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
          gap: 22px;
        }

        /* ── CARD ── */
        .pr-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.25s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.25s ease,
                      border-color 0.25s ease;
          opacity: 0;
          animation: fadeUp 0.55s ease forwards;
          position: relative;
        }
        .pr-card.is-hovered {
          transform: translateY(-6px) scale(1.01);
          border-color: #93c5fd;
          box-shadow: 0 0 0 4px #eff6ff, 0 16px 48px rgba(37,99,235,0.13);
        }
        .pr-card-num {
          position: absolute; top: 14px; left: 14px; z-index: 10;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border: 0.5px solid #e2e8f0;
          border-radius: 8px;
          padding: 3px 9px;
          font-size: 11px; font-weight: 600;
          color: #94a3b8; letter-spacing: 0.04em;
        }
        .pr-card-img-wrap {
          width: 100%; aspect-ratio: 16/9;
          overflow: hidden; position: relative;
          background: #f1f5f9;
        }
        .pr-card-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.22,.68,0,1.1);
        }
        .pr-card.is-hovered .pr-card-img { transform: scale(1.06); }
        .pr-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .pr-card.is-hovered .pr-card-img-overlay { opacity: 1; }
        .pr-card-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #f0f7ff, #dbeafe);
          font-size: 32px;
        }
        .pr-card-placeholder span {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #93c5fd;
        }
        .pr-card-body {
          padding: 22px 22px 18px;
          flex: 1; display: flex; flex-direction: column;
        }
        .pr-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
        .pr-tag {
          background: #f0f7ff; color: #2563eb;
          border: 0.5px solid #bfdbfe; border-radius: 20px;
          padding: 2px 10px;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .pr-card-title {
          font-family: 'Lora', serif;
          font-size: 18px; font-weight: 600;
          color: #0f172a; margin-bottom: 8px; line-height: 1.25;
        }
        .pr-card-desc {
          font-size: 13px; color: #64748b;
          line-height: 1.75; flex: 1; margin-bottom: 20px;
        }
        .pr-card-actions {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
          padding-top: 16px; border-top: 0.5px solid #f1f5f9;
        }
        .pr-card-actions .pr-btn-details { grid-column: 1 / -1; }
        .pr-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          padding: 9px 14px; border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 500;
          text-decoration: none; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.18s ease;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .pr-btn:hover { transform: translateY(-1px); }
        .pr-btn i { font-size: 13px; }
        .pr-btn-live { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
        .pr-btn-live:hover { background: #dcfce7; border-color: #86efac; }
        .pr-btn-code { background: #0f172a; color: #e2e8f0; }
        .pr-btn-code:hover { background: #1e293b; }
        .pr-btn-details { background: transparent; color: #374151; border-color: #e2e8f0; }
        .pr-btn-details:hover { background: #f8fafc; border-color: #cbd5e1; color: #0f172a; }

        /* ── EMPTY ── */
        .pr-empty {
          max-width: 900px; margin: 0 auto;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 100px 24px; text-align: center;
        }
        .pr-empty-icon { font-size: 52px; margin-bottom: 20px; }
        .pr-empty-title {
          font-family: 'Lora', serif;
          font-size: 22px; font-weight: 600;
          color: #0f172a; margin-bottom: 10px;
        }
        .pr-empty-sub { font-size: 14px; color: #94a3b8; }

        /* ── FOOTER (matches Resume, Home & ProjectDetails pages) ── */
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
          font-size: 13px; color: #5a5650;
          text-decoration: none; transition: color 0.15s;
        }
        .rv-footer-nav a:hover { color: #1a1814; }
        .rv-footer-right { display: flex; align-items: center; gap: 16px; }
        .rv-footer-copy { font-size: 12px; color: #7a7268; }
        .rv-open-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: #4a7c59; background: #e4efe8;
          padding: 5px 10px; border-radius: 100px;
        }
        .rv-open-badge::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        @media (max-width: 620px) {
          .pr-header { padding: 60px 20px 48px; }
          .pr-section { padding: 40px 20px 64px; }
          .pr-grid { grid-template-columns: 1fr; gap: 16px; }
          .pr-header-deco { display: none; }
          .pr-card-actions { grid-template-columns: 1fr; }
          .pr-card-actions .pr-btn-details { grid-column: 1; }
          .rv-footer { padding: 20px 24px; }
        }
      `}</style>

      <div className="pr-page">

        {/* ── HEADER ── */}
        <section className="pr-header">
          <div className="pr-header-deco">{projects?.length ?? 0}</div>
          <div className="pr-header-inner">
            <div className="pr-eyebrow">
              <div className="pr-eyebrow-dot" />
              Portfolio
            </div>
            <h1 className="pr-heading">Things I've <em>built</em></h1>
            <p className="pr-subheading">
              Full-stack apps, creative experiments, and everything in between each project a new problem solved.
            </p>
            {projects?.length > 0 && (
              <div className="pr-count">
                <i className="bi bi-grid-3x3-gap" />
                {projects.length} project{projects.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </section>

        {/* ── GRID ── */}
        <section className="pr-section">
          {projects && projects.length > 0 ? (
            <div className="pr-grid">
              {projects.map(({ id, title, description, image, live, code, tags }, i) => (
                <div
                  className={`pr-card${hovered === id ? ' is-hovered' : ''}`}
                  key={id}
                  style={{ animationDelay: `${0.06 + i * 0.09}s` }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="pr-card-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="pr-card-img-wrap">
                    {image ? (
                      <>
                        <img src={image} alt={title} className="pr-card-img" />
                        <div className="pr-card-img-overlay" />
                      </>
                    ) : (
                      <div className="pr-card-placeholder">
                        🖥️<span>Preview</span>
                      </div>
                    )}
                  </div>
                  <div className="pr-card-body">
                    {tags && tags.length > 0 && (
                      <div className="pr-card-tags">
                        {tags.slice(0, 3).map(t => (
                          <span className="pr-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="pr-card-title">{title}</div>
                    <p className="pr-card-desc">{description}</p>
                    <div className="pr-card-actions">
                      {live && (
                        <a className="pr-btn pr-btn-live" href={live} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-box-arrow-up-right" /> Live
                        </a>
                      )}
                      {code && (
                        <a className="pr-btn pr-btn-code" href={code} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-github" /> Code
                        </a>
                      )}
                      <Link to={`/projects/${id}`} className="pr-btn pr-btn-details pr-btn-details">
                        <i className="bi bi-arrow-right" /> View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="pr-empty">
              <div className="pr-empty-icon">🚧</div>
              <div className="pr-empty-title">Coming soon</div>
              <p className="pr-empty-sub">Projects are on their way — check back soon!</p>
            </div>
          )}
        </section>

        {/* ── FOOTER (matches Resume, Home & ProjectDetails pages) ── */}
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
    </>
  );
};

export default Projects;