const beforeItems = [
  'Família sobrecarregada',
  'Poucas horas de descanso',
  'Preocupação constante',
  'Falta de acompanhamento profissional',
  'Paciente sem suporte adequado',
];

const afterItems = [
  'Mais tranquilidade para a família',
  'Profissionais capacitados 24h',
  'Atendimento humanizado e próximo',
  'Paciente mais confortável e seguro',
  'Família com qualidade de vida',
];

export function ComparativoSection() {
  return (
    <section className="comparativo" id="comparativo">
      <div className="center reveal">
        <span className="section-eyebrow">
          Antes e Depois
        </span>
        <h2 className="section-title">
          O cuidado certo transforma
          <br />
          sua experiência e a da sua família.
        </h2>
      </div>

      <div className="comparativo-wrap reveal reveal-delay-1">
        <div className="comp-card before">
          <div className="comp-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            Sem assistência especializada
          </div>
          <ul className="comp-list">
            {beforeItems.map(item => (
              <li key={item}>
                <span className="comp-dot-bad" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="comp-card after">
          <div className="comp-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Com a Mara Hospitalar
          </div>
          <ul className="comp-list">
            {afterItems.map(item => (
              <li key={item}>
                <span className="comp-dot-good" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
