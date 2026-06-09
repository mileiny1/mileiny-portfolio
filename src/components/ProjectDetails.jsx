import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from './projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Manrope, sans-serif', gap: 16 }}>
        <div style={{ fontSize: 48 }}>🔍</div>
        <h2 style={{ fontFamily: 'Lora, serif', color: '#0f172a' }}>Project not found</h2>
        <Link to="/projects" style={{ color: '#2563eb', fontSize: 14 }}>← Back to Projects</Link>
      </div>
    );
  }

  const idx = projects.findIndex(p => p.id === parseInt(id));
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-page {
          background: #f8fafc;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HERO IMAGE BANNER ── */
        .pd-banner {
          width: 100%;
          aspect-ratio: 21/7;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #dbeafe, #eff6ff);
        }
        .pd-banner-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.88);
        }
        .pd-banner-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.1) 60%, transparent 100%);
        }
        .pd-banner-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 56px;
        }

        .pd-banner-title {
          position: absolute;
          bottom: 28px; left: 32px; right: 32px;
          font-family: 'Lora', serif;
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 600; color: #fff;
          letter-spacing: -0.02em; line-height: 1.15;
          text-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }

        .pd-back-btn {
          position: absolute;
          top: 20px; left: 24px;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 0.5px solid rgba(255,255,255,0.3);
          color: #fff;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 12px; font-weight: 500;
          text-decoration: none;
          transition: background 0.18s;
        }
        .pd-back-btn:hover { background: rgba(255,255,255,0.25); color: #fff; }

        /* ── MAIN LAYOUT ── */
        .pd-main {
          max-width: 860px; margin: 0 auto;
          padding: 40px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
          align-items: start;
        }

        .pd-concept-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
          border-left: 3px solid #2563eb;
        }
        .pd-concept-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 8px;
        }
        .pd-concept-text {
          font-family: 'Lora', serif;
          font-size: 17px; font-style: italic;
          color: #1e293b; line-height: 1.65;
        }

        .pd-desc {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .pd-section-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 12px;
        }
        .pd-desc-text {
          font-size: 14px; color: #475569;
          line-height: 1.8;
        }

        .pd-features-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .pd-feature-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 10px 0;
          border-bottom: 0.5px solid #f1f5f9;
          font-size: 14px; color: #374151; line-height: 1.55;
        }
        .pd-feature-item:last-child { border-bottom: none; padding-bottom: 0; }
        .pd-feature-dot {
          width: 20px; height: 20px; flex-shrink: 0;
          border-radius: 50%;
          background: #eff6ff; border: 1px solid #bfdbfe;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .pd-feature-dot i { font-size: 10px; color: #2563eb; }

        /* ── RIGHT SIDEBAR ── */
        .pd-actions {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .pd-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 18px; border-radius: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 500;
          text-decoration: none; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.18s ease;
          width: 100%;
        }
        .pd-btn:hover { transform: translateY(-1px); }
        .pd-btn-live {
          background: #f0fdf4; color: #15803d;
          border-color: #bbf7d0;
        }
        .pd-btn-live:hover { background: #dcfce7; border-color: #86efac; }
        .pd-btn-code {
          background: #0f172a; color: #e2e8f0;
        }
        .pd-btn-code:hover { background: #1e293b; }

        .pd-tech-card {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .pd-tech-grid {
          display: flex; flex-wrap: wrap; gap: 7px;
          margin-top: 12px;
        }
        .pd-tech-tag {
          background: #f0f7ff;
          color: #1d4ed8;
          border: 0.5px solid #bfdbfe;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.04em;
        }

        .pd-meta-card {
          background: #0f172a;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .pd-meta-num {
          font-family: 'Lora', serif;
          font-size: 44px; font-weight: 600;
          color: #1e3a5f; line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .pd-meta-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #475569;
        }
        .pd-meta-title {
          font-family: 'Lora', serif;
          font-size: 15px; color: #94a3b8;
          margin-top: 12px; line-height: 1.4;
        }

        /* ── PREV / NEXT NAV ── */
        .pd-nav {
          max-width: 860px; margin: 0 auto;
          padding: 0 24px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .pd-nav-btn {
          background: #fff;
          border: 0.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 20px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex; align-items: center; gap: 12px;
          cursor: pointer;
        }
        .pd-nav-btn:hover {
          border-color: #93c5fd;
          box-shadow: 0 6px 20px rgba(37,99,235,0.09);
          transform: translateY(-2px);
        }
        .pd-nav-btn.next { justify-content: flex-end; text-align: right; }
        .pd-nav-btn.placeholder { pointer-events: none; opacity: 0; }
        .pd-nav-arrow {
          width: 32px; height: 32px; flex-shrink: 0;
          border-radius: 8px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          color: #2563eb; font-size: 14px;
        }
        .pd-nav-meta { flex: 1; min-width: 0; }
        .pd-nav-dir {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 3px;
        }
        .pd-nav-name {
          font-family: 'Lora', serif;
          font-size: 14px; font-weight: 600;
          color: #0f172a; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
        }

        /* ── FOOTER (matches Resume & Home pages) ── */
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

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pd-main { animation: fadeUp 0.5s ease forwards 0.1s; opacity: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .pd-main {
            grid-template-columns: 1fr;
            padding: 28px 18px 60px;
            gap: 20px;
          }
          .pd-sidebar { order: -1; }
          .pd-actions { flex-direction: row; }
          .pd-banner { aspect-ratio: 16/9; }
          .pd-banner-title { font-size: 20px; bottom: 18px; left: 18px; }
          .pd-nav { grid-template-columns: 1fr 1fr; gap: 10px; padding: 0 18px 40px; }
          .rv-footer { padding: 20px 24px; }
        }
      `}</style>

      <div className="pd-page">

        {/* ── BANNER ── */}
        <div className="pd-banner">
          {project.image ? (
            <>
              <img src={project.image} alt={project.title} className="pd-banner-img" />
              <div className="pd-banner-overlay" />
            </>
          ) : (
            <div className="pd-banner-placeholder">🖥️</div>
          )}
          <Link to="/projects" className="pd-back-btn">
            <i className="bi bi-arrow-left" /> Projects
          </Link>
          <div className="pd-banner-title">{project.title}</div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="pd-main">

          {/* LEFT */}
          <div className="pd-left">
            {project.concept && (
              <div className="pd-concept-card">
                <div className="pd-concept-label">Concept</div>
                <p className="pd-concept-text">"{project.concept}"</p>
              </div>
            )}

            <div className="pd-desc">
              <div className="pd-section-label">Overview</div>
              <p className="pd-desc-text">{project.description}</p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="pd-features-card">
                <div className="pd-section-label">Main Features</div>
                {project.features.map((feature, i) => (
                  <div className="pd-feature-item" key={i}>
                    <div className="pd-feature-dot">
                      <i className="bi bi-check" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="pd-sidebar">
            <div className="pd-meta-card">
              <div className="pd-meta-num">{String(idx + 1).padStart(2, '0')}</div>
              <div className="pd-meta-label">Project</div>
              <div className="pd-meta-title">{project.title}</div>
            </div>

            {(project.live || project.code) && (
              <div className="pd-actions">
                {project.live && (
                  <a className="pd-btn pd-btn-live" href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-box-arrow-up-right" /> View Live
                  </a>
                )}
                {project.code && (
                  <a className="pd-btn pd-btn-code" href={project.code} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github" /> View Code
                  </a>
                )}
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="pd-tech-card">
                <div className="pd-section-label">Tech Stack</div>
                <div className="pd-tech-grid">
                  {project.technologies.map((tech, i) => (
                    <span className="pd-tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── PREV / NEXT NAV ── */}
        <div className="pd-nav">
          {prev ? (
            <div className="pd-nav-btn" onClick={() => navigate(`/projects/${prev.id}`)}>
              <div className="pd-nav-arrow"><i className="bi bi-arrow-left" /></div>
              <div className="pd-nav-meta">
                <div className="pd-nav-dir">Previous</div>
                <div className="pd-nav-name">{prev.title}</div>
              </div>
            </div>
          ) : <div className="pd-nav-btn placeholder" />}

          {next ? (
            <div className="pd-nav-btn next" onClick={() => navigate(`/projects/${next.id}`)}>
              <div className="pd-nav-meta">
                <div className="pd-nav-dir">Next</div>
                <div className="pd-nav-name">{next.title}</div>
              </div>
              <div className="pd-nav-arrow"><i className="bi bi-arrow-right" /></div>
            </div>
          ) : <div className="pd-nav-btn placeholder" />}
        </div>

        {/* ── FOOTER (matches Resume & Home pages) ── */}
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

      </div>
    </>
  );
};

export default ProjectDetails;