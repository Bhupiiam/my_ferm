export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">AI Automation & Operations Intelligence</div>
          <h1 className="hero-title">
            AI‑Powered Automation & <span className="gradient-text">Monitoring</span> for Business Operations
          </h1>
          <p className="hero-subtitle">
            We help businesses automate workflows, supervise operations, and manage orders using intelligent AI systems.
            Reduce manual work, prevent issues, and gain real‑time visibility.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Book a Consultation</a>
            <a href="mailto:hello@example.com" className="btn btn-ghost">Get in Touch</a>
          </div>
          <div className="hero-badges">
            <span className="badge">SaaS</span>
            <span className="badge">Logistics</span>
            <span className="badge">E‑commerce</span>
            <span className="badge">Finance Ops</span>
            <span className="badge">Healthcare Ops</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass card">
            <div className="stat">
              <span className="stat-label">Workflows automated</span>
              <span className="stat-value">150+</span>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <span className="stat-label">Avg. SLA improvement</span>
              <span className="stat-value">38%</span>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <span className="stat-label">Anomalies surfaced</span>
              <span className="stat-value">24k/mo</span>
            </div>
          </div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
      </div>
    </section>
  );
}


