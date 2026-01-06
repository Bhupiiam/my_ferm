import { FormEvent, useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    // Fake send
    setTimeout(() => {
      setSending(false);
      setSent(true);
      console.log('Contact submission:', Object.fromEntries(fd.entries()));
      e.currentTarget.reset();
    }, 600);
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2 className="section-title">Let’s talk</h2>
          <p className="lede">Tell us about your operations. We’ll identify quick wins and a roadmap to automation and visibility.</p>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn btn-primary">Book a Call</a>
          <p className="contact-hint">Prefer email? <a href="mailto:hello@example.com">hello@example.com</a></p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Acme Inc." />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="What would you like to improve?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          <p className="form-note">{sent ? 'Thanks! We will get back to you shortly.' : 'By submitting, you agree to our respectful follow‑up. No spam ever.'}</p>
        </form>
      </div>
    </section>
  );
}


