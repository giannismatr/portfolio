import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.role + item.company} className="timeline-item">
              <div className="timeline-header">
                <h3>{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-company">{item.company}</p>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
