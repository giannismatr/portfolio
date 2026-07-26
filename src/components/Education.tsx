import { education } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          {education.map((item) => (
            <li key={item.degree} className="education-item">
              <h3>{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-period">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
