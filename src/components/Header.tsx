const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#certifications', label: 'certifications' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-bracket">{'<'}</span>
          IM
          <span className="logo-bracket">{' />'}</span>
        </a>
        <nav className="nav">
          {links.map((link, i) => (
            <a key={link.href} href={link.href}>
              <span className="nav-index">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
