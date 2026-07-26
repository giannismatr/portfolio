import { profile } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-lead">
          <span className="comment">// have a project in mind or just want to connect? feel free to reach out.</span>
        </p>
        <div className="contact-links">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            [ {profile.email} ]
          </a>
          <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            [ LinkedIn ]
          </a>
        </div>
      </div>
    </section>
  );
}
