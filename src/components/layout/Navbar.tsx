import { useState } from 'react';
import { siteConfig } from '../../config/site';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { HeartIcon } from '../ui/Icons';

const navLinks = [
  { href: '#sobre', label: 'Quem Somos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

export function Navbar() {
  const { scrolled } = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <div className="nav-logo-mark">
          <HeartIcon size={22} />
        </div>
        <div className="nav-logo-text">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>
            Falar no WhatsApp
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="hamburger"
        id="hamburger"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
