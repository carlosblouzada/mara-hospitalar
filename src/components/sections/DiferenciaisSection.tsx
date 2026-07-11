import { diferenciais } from '../../data/diferenciais';
import { DiferencialIcon } from '../ui/Icons';

export function DiferenciaisSection() {
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="center reveal">
        <span className="section-eyebrow">Por que nos escolher</span>
        <h2 className="section-title">Nossos Diferenciais</h2>
        <p className="section-sub">
          Cada detalhe do nosso atendimento foi pensado para oferecer a melhor experiência para o paciente e
          tranquilidade para a família.
        </p>
      </div>

      <div className="diferenciais-grid">
        {diferenciais.map((item, index) => (
          <div key={item.title} className={`diferencial-card reveal reveal-delay-${(index % 3) + 1}`}>
            <div className="diferencial-icon">
              <DiferencialIcon name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
