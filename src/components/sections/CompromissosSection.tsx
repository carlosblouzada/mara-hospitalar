import { compromissos } from '../../data/compromissos';
import { DiferencialIcon } from '../ui/Icons';

export function CompromissosSection() {
  return (
    <section className="compromissos" id="compromissos">
      <div className="center reveal">
        <span className="section-eyebrow">Nossos Pilares</span>
        <h2 className="section-title">Os 5 Compromissos da Mara Hospitalar</h2>
      </div>

      <div className="comp5-grid">
        {compromissos.map((item, index) => (
          <div key={item.title} className={`comp5-item reveal reveal-delay-${index + 1}`}>
            <div className="comp5-icon">
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
