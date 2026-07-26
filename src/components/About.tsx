import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-lead">{profile.bio}</p>
      </div>
    </section>
  );
}
