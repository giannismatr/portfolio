import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
