import { siteImages } from '../../config/images';
import { siteConfig } from '../../config/site';
import { WhatsAppIcon } from '../ui/Icons';

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-eyebrow reveal">Assistência Domiciliar</div>
        <h1 className="reveal reveal-delay-1">
          Cuidamos de quem você ama com <em>carinho,</em> segurança e dedicação.
        </h1>
        <p className="hero-desc reveal reveal-delay-2">
          A Mara Hospitalar oferece assistência domiciliar humanizada, com profissionais qualificados para
          proporcionar conforto, qualidade de vida e tranquilidade para toda a família.
        </p>
        <div className="hero-btns reveal reveal-delay-3">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <WhatsAppIcon size={18} />
            Solicitar Atendimento
          </a>
          <a href="#sobre" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 12 12 14 14" />
            </svg>
            Saiba Mais
          </a>
        </div>
        <div className="hero-trust reveal reveal-delay-4">
          <div className="hero-trust-item">
            <strong>8+</strong>
            <span>
              Anos de
              <br />
              Experiência
            </span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <strong>500+</strong>
            <span>
              Famílias
              <br />
              Atendidas
            </span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <strong>24h</strong>
            <span>
              Disponível
              <br />
              Sempre
            </span>
          </div>
        </div>
      </div>

      <div className="hero-image-col">
        <img
          className="hero-image-main"
          src={siteImages.founder.src}
          alt={siteImages.founder.alt}
          fetchPriority="high"
        />

        <div className="hero-founder-card">
          <div className="hero-founder-avatar">
            <img src={siteImages.founder.src} alt="" aria-hidden="true" />
          </div>
          <div className="hero-founder-info">
            <strong>{siteConfig.founder}</strong>
            <span>{siteConfig.founderRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
