import { galleryImages } from '../../config/images';

export function GaleriaSection() {
  return (
    <section className="galeria" id="galeria">
      <div className="galeria-header center reveal">
        <span className="section-eyebrow">Nosso Cuidado em Imagens</span>
        <h2 className="section-title">
          Momentos que <em style={{ fontStyle: 'italic', color: 'var(--bordeaux)' }}>transmitem</em> confiança
        </h2>
        <p className="section-sub">
          Cada imagem reflete o compromisso da Mara Hospitalar: presença, acolhimento e profissionalismo no
          cuidado de quem você ama.
        </p>
      </div>

      <div className="galeria-grid reveal reveal-delay-1">
        {galleryImages.map(image => (
          <figure key={image.id} className={`galeria-item galeria-item--${image.size}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption className="galeria-caption">
              <span>{image.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
