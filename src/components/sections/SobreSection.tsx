import { galleryImages } from '../../config/images';
import { siteConfig } from '../../config/site';

const values = [
  'Ética & Transparência',
  'Equipe Certificada',
  'Disponibilidade Total',
  'Cuidado Personalizado',
];

export function SobreSection() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-image">
        <img
          className="sobre-img"
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          loading="lazy"
        />
        <div className="sobre-badge">
          <strong>+500</strong>
          <span>famílias atendidas</span>
        </div>
      </div>

      <div className="sobre-content reveal">
        <span className="section-eyebrow">Quem Somos</span>
        <h2 className="section-title">
          Cuidado que vai <em style={{ fontStyle: 'italic', color: 'var(--bordeaux)' }}>além</em> do atendimento
        </h2>
        <p>
          Na Mara Hospitalar acreditamos que cuidar vai muito além do atendimento. Nosso compromisso é oferecer
          assistência domiciliar com respeito, atenção e profissionalismo, garantindo segurança, conforto e
          qualidade de vida para cada paciente.
        </p>
        <p>
          Nossa equipe é preparada para atender cada família com dedicação, ética e responsabilidade — porque cada
          vida tem um valor que não se mede.
        </p>
        <div className="sobre-values">
          {values.map(value => (
            <span key={value} className="sobre-value">
              {value}
            </span>
          ))}
        </div>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ width: 'fit-content', marginTop: 12 }}
        >
          Conversar com a Equipe
        </a>
      </div>
    </section>
  );
}
