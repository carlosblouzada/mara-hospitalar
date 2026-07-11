import { siteConfig } from '../../config/site';
import { servicos } from '../../data/servicos';
import { HeartIcon, WhatsAppIcon } from '../ui/Icons';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-mark">
              <HeartIcon size={18} />
            </div>
            <div className="footer-logo-text">
              <span>{siteConfig.name}</span>
              <span>{siteConfig.tagline}</span>
            </div>
          </div>
          <p>
            Cuidado humanizado com profissionalismo e dedicação. Porque cada família merece tranquilidade e
            segurança.
          </p>
          <div className="footer-social">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" width="15" height="15">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={15} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Serviços</h4>
          <ul>
            {servicos.map(servico => (
              <li key={servico}>{servico}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.city}
          </div>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="footer-contact-item">
            <WhatsAppIcon size={15} />
            {siteConfig.phone}
          </a>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {siteConfig.hours}
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span>
        <span>
          Site desenvolvido pela{' '}
          <a href="https://www.louzadatech.com" target="_blank" rel="noreferrer">
            Louzada Tech
          </a>
        </span>
      </div>
    </footer>
  );
}
