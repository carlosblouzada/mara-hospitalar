import { depoimentos } from '../../data/depoimentos';
import { useCarousel } from '../../hooks/useCarousel';
import { UserIcon } from '../ui/Icons';

export function DepoimentosSection() {
  const { trackRef, wrapRef, index, dotCount, goNext, goPrev, goTo } = useCarousel(depoimentos.length);

  return (
    <section className="depoimentos" id="depoimentos">
      <div className="center reveal">
        <span className="section-eyebrow">Avaliações</span>
        <h2 className="section-title">O que dizem nossas famílias</h2>
      </div>

      <div className="carousel-wrap reveal" ref={wrapRef}>
        <div className="carousel-track" id="carouselTrack" ref={trackRef}>
          {depoimentos.map(depo => (
            <div key={depo.name} className="depo-card">
              <div className="stars">★★★★★</div>
              <p className="depo-text">&ldquo;{depo.text}&rdquo;</p>
              <div className="depo-author">
                <div className="depo-avatar">
                  <UserIcon size={20} />
                </div>
                <div className="depo-name">
                  <strong>{depo.name}</strong>
                  <span>{depo.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="carousel-dots" id="carouselDots">
            {Array.from({ length: dotCount }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                className={`carousel-dot${dotIndex === index ? ' active' : ''}`}
                aria-label={`Ir para depoimento ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </div>
          <button type="button" className="carousel-btn" onClick={goNext} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
