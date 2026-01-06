import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <span className="brand-mark">◧</span>
          <span className="brand-name">Ferm AI Ops</span>
        </a>
        <nav className="nav">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>
          <ul id="nav-menu" className={`nav-menu ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">How We Work</a></li>
            <li><a href="#industries">Who We Help</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact" className="btn btn-sm btn-primary">Book a Call</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


