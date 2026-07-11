import { servicos } from '../../data/servicos';

export function ServicosSection() {
  return (
    <section className="servicos" id="servicos">
      <div className="center reveal">
        <span className="section-eyebrow">O que oferecemos</span>
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-sub">
          Atendimento completo para cada necessidade, com profissionalismo e dedicação.
        </p>
      </div>

      <div className="servicos-grid">
        {servicos.map((servico, index) => (
          <div key={servico} className={`servico-card reveal reveal-delay-${(index % 3) + 1}`}>
            <span className="servico-num">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{servico}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
