import { profile } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
            <span className="terminal-title">zsh — ioannis@portfolio</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> whoami
            </p>
            <p className="terminal-output terminal-name">{profile.name}</p>
            <p className="terminal-line">
              <span className="prompt">$</span> cat role.txt
            </p>
            <p className="terminal-output terminal-role">{profile.title}</p>
            <p className="terminal-line">
              <span className="prompt">$</span> cat objective.txt
            </p>
            <p className="terminal-output">
              {profile.tagline}
              <span className="cursor" />
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            [ View Projects ]
          </a>
          <a className="button button-secondary" href="#contact">
            [ Get in Touch ]
          </a>
        </div>
      </div>
    </section>
  );
}
