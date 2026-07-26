import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          <span className="comment">// © {year} {profile.name}. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
