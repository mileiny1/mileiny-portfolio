import React from 'react';
import myphoto from '../assets/myphoto.jpg';

const facts = [
  { emoji: '🎓', label: 'Education',  value: '3 Years CIS Study' },
  { emoji: '💻', label: 'Background', value: 'Self-Taught + College' },
  { emoji: '🏥', label: 'Former Role', value: 'Nursing Assistant' },
  { emoji: '🚤', label: 'Hobby',       value: 'Jet Ski Enthusiast' },
];

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── PAGE ── */
        .ab-page {
          background: #fff;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        /* ── HERO STRIP ── */
        .ab-hero {
          background: #fff;
          padding: 72px 24px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 90% 20%, #dbeafe44 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 5% 80%,  #eff6ff33 0%, transparent 60%);
          pointer-events: none;
        }
        .ab-hero-inner {
          max-width: 900px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 64px;
          align-items: center;
          position: relative; z-index: 1;
          padding-bottom: 72px;
        }

        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .ab-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563eb;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.8); }
        }
        .ab-heading {
          font-family: 'Lora', serif;
          font-size: clamp(34px, 5vw, 50px);
          font-weight: 600; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.2s;
        }
        .ab-heading span { color: #2563eb; }
        .ab-bio {
          font-size: 16px; color: #475569;
          line-height: 1.8; font-weight: 400;
          max-width: 480px;
          opacity: 0; animation: fadeUp 0.5s ease forwards 0.3s;
        }
        .ab-bio strong { color: #0f172a; font-weight: 600; }

        /* ── PHOTO ── */
        .ab-photo-wrap {
          position: relative;
          opacity: 0; animation: zoomIn 0.6s ease forwards 0.25s;
        }
        .ab-photo {
          width: 100%; aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 20px; display: block;
          box-shadow: 0 24px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06);
        }
        .ab-photo-wrap::before {
          content: '';
          position: absolute; top: -10px; right: -10px;
          width: 70%; height: 70%;
          border-top: 2px solid #bfdbfe;
          border-right: 2px solid #bfdbfe;
          border-radius: 0 20px 0 0;
          pointer-events: none;
        }
        .ab-photo-wrap::after {
          content: '';
          position: absolute; bottom: -10px; left: -10px;
          width: 50%; height: 40%;
          border-bottom: 2px solid #dbeafe;
          border-left: 2px solid #dbeafe;
          border-radius: 0 0 0 20px;
          pointer-events: none;
        }

        /* ── FACTS STRIP ── */
        .ab-facts {
          background: #f8fafc;
          border-top: 0.5px solid #e8e8e8;
          border-bottom: 0.5px solid #e8e8e8;
          padding: 48px 24px;
        }
        .ab-facts-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: #e8e8e8;
          border: 0.5px solid #e8e8e8;
          border-radius: 16px; overflow: hidden;
        }
        .ab-fact {
          background: #fff; padding: 28px 20px;
          text-align: center; transition: background 0.18s;
        }
        .ab-fact:hover { background: #f0f7ff; }
        .ab-fact-emoji { font-size: 26px; margin-bottom: 10px; }
        .ab-fact-value {
          font-family: 'Lora', serif;
          font-size: 15px; font-weight: 600;
          color: #0f172a; margin-bottom: 4px; line-height: 1.3;
        }
        .ab-fact-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #94a3b8;
        }

        /* ── JOURNEY SECTION ── */
        .ab-journey { padding: 72px 24px; background: #fff; }
        .ab-journey-inner { max-width: 900px; margin: 0 auto; }
        .ab-section-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px;
        }
        .ab-section-title {
          font-family: 'Lora', serif;
          font-size: 26px; font-weight: 600;
          color: #0f172a; letter-spacing: -0.02em; margin-bottom: 40px;
        }
        .ab-timeline {
          display: flex; flex-direction: column; gap: 0;
          border-left: 1.5px solid #e2e8f0;
          padding-left: 32px; margin-left: 8px;
        }
        .ab-timeline-item { position: relative; padding-bottom: 36px; }
        .ab-timeline-item:last-child { padding-bottom: 0; }
        .ab-timeline-item::before {
          content: '';
          position: absolute; left: -39px; top: 4px;
          width: 12px; height: 12px; border-radius: 50%;
          background: #fff; border: 2px solid #2563eb;
        }
        .ab-tl-year {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #2563eb; margin-bottom: 6px;
        }
        .ab-tl-title {
          font-family: 'Lora', serif;
          font-size: 17px; font-weight: 600;
          color: #0f172a; margin-bottom: 6px;
        }
        .ab-tl-body {
          font-size: 14px; color: #64748b;
          line-height: 1.7; max-width: 560px;
        }

        /* ── FOOTER (matches all other pages) ── */
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
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity:0; transform:scale(0.9); }
          to   { opacity:1; transform:scale(1); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 700px) {
          .ab-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .ab-photo-wrap { order: -1; max-width: 280px; margin: 0 auto; }
          .ab-facts-inner { grid-template-columns: repeat(2, 1fr); }
          .rv-footer { padding: 20px 24px; }
        }
      `}</style>

      <div className="ab-page">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-inner">
            <div>
              <div className="ab-eyebrow">
                <div className="ab-eyebrow-dot" />
                About Me
              </div>
              <h1 className="ab-heading">
                Creative thinker.<br />
                <span>Full Stack</span> builder.
              </h1>
              <p className="ab-bio">
                <strong>Mileiny Nolasco</strong> is an aspiring Software Engineer with a strong passion for technology, problem solving, and continuous learning. After three years of college level study and extensive self taught experience in Computer Information Systems, I decided to follow my passion for technology and build a career in the tech industry after working as a Nursing Assistant. I enjoy building web applications and creating solutions that improve user experiences. My technical skills include JavaScript, Python, React, HTML, CSS, Node.js, Express.js, MongoDB, PostgreSQL, and cloud technologies. Through hands on projects and real-world experience, I have developed a strong foundation in software development, troubleshooting, and system administration. I also use Postman for API testing and Cypress for front-end testing, allowing me to thoroughly test and validate the applications I develop. When I'm not coding, I enjoy spending time with family, learning new technologies, and jet skiing. I am always looking for opportunities to grow as a developer, expand my technical expertise, and contribute to meaningful projects that make a positive impact.
              </p>
            </div>
            <div className="ab-photo-wrap">
              <img src={myphoto} alt="Mileiny Nolasco" className="ab-photo" />
            </div>
          </div>
        </section>

        {/* ── FACTS ── */}
        <section className="ab-facts">
          <div className="ab-facts-inner">
            {facts.map(({ emoji, label, value }) => (
              <div className="ab-fact" key={label}>
                <div className="ab-fact-emoji">{emoji}</div>
                <div className="ab-fact-value">{value}</div>
                <div className="ab-fact-label">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JOURNEY ── */}
        <section className="ab-journey">
          <div className="ab-journey-inner">
            <p className="ab-section-label">My Path</p>
            <h2 className="ab-section-title">The journey so far</h2>
            <div className="ab-timeline">
              <div className="ab-timeline-item">
                <div className="ab-tl-year">2021 — Present</div>
                <div className="ab-tl-title">Nursing Assistant</div>
                <div className="ab-tl-body">
                  Worked in healthcare, developing sharp attention to detail, empathy under pressure,
                  and a drive to solve real human problems skills that translate directly to great software.
                </div>
              </div>
              <div className="ab-timeline-item">
                <div className="ab-tl-year">2023 — 2026</div>
                <div className="ab-tl-title">CIS Studies & Self-Teaching</div>
                <div className="ab-tl-body">
                  Pursued three years of college level computer information systems while simultaneously diving deep
                  into self-taught full-stack development  Python, React, Django, Node.js, JavaScript, SQL and more.
                </div>
              </div>
              <div className="ab-timeline-item">
                <div className="ab-tl-year">2024 — Present</div>
                <div className="ab-tl-title">Full Stack Developer</div>
                <div className="ab-tl-body">
                  A passionate Full-Stack Developer who transitioned from healthcare to technology, with a strong foundation in software development, problem-solving, and modern web technologies gained through self study and formal education in Computer Information Systems. Dedicated to building applications that make a positive impact on people's lives and enhance user experiences. Passionate about creating clean, scalable, and high performing web applications from front to back, with a continuous commitment to learning and professional growth. Enjoys transforming ideas into practical, user-friendly solutions and is open to new opportunities where creativity, dedication, and technical expertise can make a meaningful impact. Outside of coding, enjoys jet skiing, spending time on the water, and soaking up sunny days.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER (matches Resume, Home, Projects & ProjectDetails pages) ── */}
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

export default About;