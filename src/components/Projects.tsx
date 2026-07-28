import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.checklist && (
                <ul className="checklist">
                  {project.checklist.map((item) => (
                    <li key={item.label} className={item.done ? 'done' : 'pending'}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag-pill">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  {project.linkLabel ?? 'View project'} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
