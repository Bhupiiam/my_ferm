export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">◧</span>
          <span>Ferm AI Ops</span>
        </div>
        <div className="footer-meta">
          <span>© {year} Ferm AI Ops</span>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}


