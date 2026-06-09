
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
 
function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);
 
  const links = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume',   label: 'Resume & Certs' },
  ];
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Manrope:wght@400;500&display=swap');
 
        .pf-nav {
          position: sticky;
          top: 0;
          z-index: 200;
          font-family: 'Manrope', sans-serif;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 0.5px solid transparent;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pf-nav.scrolled {
          border-bottom-color: #e8e8e8;
          box-shadow: 0 1px 16px rgba(0, 0, 0, 0.05);
        }
 
        .pf-nav-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 28px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
 
        .pf-nav-brand {
          font-family: 'Lora', serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          text-decoration: none;
          letter-spacing: -0.01em;
          flex-shrink: 0;
        }
        .pf-nav-brand:hover { color: #2563eb; }
        .pf-nav-brand, .pf-nav-brand:hover { transition: color 0.18s; }
 
        /* ── Desktop links ── */
        .pf-nav-links {
          display: flex;
          gap: 2px;
          align-items: center;
        }
 
        .pf-nav-link {
          position: relative;
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          font-weight: 400;
          letter-spacing: 0.01em;
          transition: color 0.18s, background 0.18s;
        }
        .pf-nav-link:hover {
          color: #0f172a;
          background: #f4f4f5;
        }
        .pf-nav-link.active {
          color: #2563eb;
          font-weight: 500;
          background: #eff6ff;
        }
        /* Blue underline on active */
        .pf-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          border-radius: 2px;
          background: #2563eb;
        }
 
        /* ── Hamburger button ── */
        .pf-nav-toggle {
          display: none;
          background: none;
          border: 0.5px solid #d1d5db;
          border-radius: 8px;
          padding: 7px 11px;
          cursor: pointer;
          color: #374151;
          font-size: 15px;
          line-height: 1;
          transition: background 0.18s, border-color 0.18s;
        }
        .pf-nav-toggle:hover {
          background: #f4f4f5;
          border-color: #9ca3af;
        }
 
        /* ── Mobile drawer ── */
        @media (max-width: 620px) {
          .pf-nav-toggle { display: flex; align-items: center; justify-content: center; }
 
          .pf-nav-links {
            /* slide-down drawer */
            position: absolute;
            top: 62px;
            left: 0; right: 0;
            background: rgba(255,255,255,0.97);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-bottom: 0.5px solid #e8e8e8;
            flex-direction: column;
            align-items: stretch;
            padding: 10px 20px 16px;
            gap: 2px;
 
            /* animation */
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: opacity 0.22s ease, transform 0.22s ease;
          }
          .pf-nav-links.open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
 
          .pf-nav-link {
            font-size: 14px;
            padding: 11px 14px;
            border-radius: 8px;
          }
          .pf-nav-link.active::after { display: none; }
          .pf-nav-link.active {
            border-left: 3px solid #2563eb;
            padding-left: 11px;
            border-radius: 0 8px 8px 0;
          }
        }
      `}</style>
 
      <nav className={`pf-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="pf-nav-inner">
          <Link className="pf-nav-brand" to="/">Mileiny Nolasco</Link>
 
          <button
            className="pf-nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
 
          <div className={`pf-nav-links${open ? ' open' : ''}`}>
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`pf-nav-link${pathname === to ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
 
export default NavBar;
 
