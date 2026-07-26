import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.code} className="cert-card">
              <span className="cert-code">{cert.code}</span>
              <span className="cert-name">{cert.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
