import { Link } from 'react-router-dom';
import developerImage from '../assets/developer.jpeg';

const skillGroups = [
  {
    title: '💻 Programming & Web Development',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Bootstrap'],
  },
  {
    title: '⚙️ Backend Development',
    items: ['Django', 'FastAPI', 'Node.js', 'Express.js', 'Mongoose'],
  },
  {
    title: '🗄️ Databases',
    items: ['PostgreSQL', 'SQL', 'pgvector', 'MongoDB'],
  },
  {
    title: '🤖 AI & Machine Learning',
    items: ['LLM APIs', 'Embeddings', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'Prompt Engineering', 'PyTorch', 'Machine Learning'],
  },
  {
    title: '☁️ Cloud & Deployment',
    items: ['AWS', 'Heroku', 'Vercel'],
  },
  {
    title: '🧪 Testing & API',
    items: ['Unit Testing', 'Pytest', 'Jest', 'Cypress', 'Postman'],
  },
];

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .h-section {
          min-height: 100vh;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 64px;
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
          max-width: 620px;
          width: 100%;
        }

        .h-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.1s;
        }

        .h-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.8); }
        }

        .h-title {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 5.5vw, 56px);
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.2s;
        }

        .h-title span {
          color: #2563eb;
        }

        .h-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          color: #64748b;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.3s;
        }

        .h-avatar-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 34px;
          opacity: 0;
          animation: zoomIn 0.7s ease forwards 0.35s;
        }

        .h-avatar {
          width: 170px;
          height: 170px;
          object-fit: cover;
          border-radius: 50%;
          display: block;
          border: 3px solid #fff;
          box-shadow: 0 0 0 5px #dbeafe, 0 18px 40px rgba(37, 99, 235, 0.12);
        }

        .h-avatar-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1.5px dashed #93c5fd;
          animation: spin 18s linear infinite;
          pointer-events: none;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .h-status {
          position: absolute;
          right: -10px;
          bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 5px 12px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #0f172a;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
        }

        .h-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
        }

        .h-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.55s;
        }

        .h-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 600;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .h-btn:hover {
          transform: translateY(-2px);
        }

        .h-btn-dark {
          background: #0f172a;
          color: #fff;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
        }

        .h-btn-blue {
          background: #2563eb;
          color: #fff;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.18);
        }

        .h-btn-green {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .skills-section {
          padding: 0 24px 80px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .skills-wrap {
          max-width: 980px;
          margin: 0 auto;
          padding-top: 72px;
        }

        .skills-label {
          text-align: center;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .skills-title {
          text-align: center;
          font-family: 'Lora', serif;
          font-size: clamp(24px, 4vw, 34px);
          line-height: 1.2;
          color: #0f172a;
          margin-bottom: 32px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .skill-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 22px 18px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
        }

        .skill-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 16px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          display: inline-block;
          background: #f8fafc;
          color: #0f172a;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 8px 12px;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

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

        .rv-footer-nav {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .rv-footer-nav a {
          font-size: 13px;
          color: #5a5650;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .rv-footer-nav a:hover {
          color: #1a1814;
        }

        .rv-footer-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .rv-footer-copy {
          font-size: 12px;
          color: #7a7268;
        }

        .rv-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #4a7c59;
          background: #e4efe8;
          padding: 5px 10px;
          border-radius: 100px;
        }

        .rv-open-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4a7c59;
          animation: badgePulse 2s infinite;
        }

        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.82); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 760px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .rv-footer {
            padding: 20px 24px;
          }
        }
      `}</style>

      <section className="h-section">
        <div className="h-inner">
          <div className="h-eyebrow">
            <div className="h-eyebrow-dot" />
            Full Stack Developer 
          </div>

          <h1 className="h-title">
            Hi, I'm<br />
            <span>Mileiny Nolasco</span>
          </h1>

          <p className="h-subtitle">Always learning and always building. Always growing.</p>

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
              GitHub
            </a>
            <a className="h-btn h-btn-blue" href="https://www.linkedin.com/in/mileiny-nolasco-4ab943328/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="h-btn h-btn-green" href="mailto:mileinygreys@gmail.com">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-wrap">
          <p className="skills-label">Skills</p>
          <h2 className="skills-title">AI &amp; Full Stack Expertise</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
