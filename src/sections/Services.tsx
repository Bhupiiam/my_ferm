export default function Services() {
  return (
    <section id="services" className="section section-services">
      <div className="container cards-grid">
        <article className="service-card reveal">
          <div className="icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h12M3 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>AI Process Automation</h3>
          <p>Automate data processing, document handling, reporting, approvals, and integrations across your stack.</p>
          <ul className="card-bullets">
            <li>RPA + API orchestration</li>
            <li>Document AI (OCR/NLP)</li>
            <li>SLA‑aware workflows</li>
          </ul>
        </article>
        <article className="service-card reveal">
          <div className="icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Intelligent Monitoring & Supervision</h3>
          <p>Detect anomalies, delays, and risks in real time. Alert the right teams with actionable context.</p>
          <ul className="card-bullets">
            <li>Anomaly detection</li>
            <li>Latency & backlog alerts</li>
            <li>Root‑cause hints</li>
          </ul>
        </article>
        <article className="service-card reveal">
          <div className="icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h10M4 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Smart Order & Workflow Management</h3>
          <p>Track orders, prioritize tasks, and manage exceptions with AI‑powered triage and automation.</p>
          <ul className="card-bullets">
            <li>Order tracking</li>
            <li>Priority routing</li>
            <li>Exception handling</li>
          </ul>
        </article>
      </div>
    </section>
  );
}


