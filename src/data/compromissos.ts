export type Compromisso = {
  title: string;
  description: string;
  icon: 'check' | 'shield' | 'heart' | 'clock' | 'team';
};

export const compromissos: Compromisso[] = [
  {
    title: 'Profissionalismo',
    description: 'Equipe treinada e comprometida com as melhores práticas de cuidado.',
    icon: 'check',
  },
  {
    title: 'Segurança',
    description: 'Protocolos rigorosos que protegem o paciente em cada etapa.',
    icon: 'shield',
  },
  {
    title: 'Humanização',
    description: 'Cuidado com empatia, respeito e atenção à história de cada pessoa.',
    icon: 'heart',
  },
  {
    title: 'Pontualidade',
    description: 'Comprometimento com horários para que sua família possa se organizar.',
    icon: 'clock',
  },
  {
    title: 'Respeito',
    description: 'Tratamento digno para cada paciente, independente da condição.',
    icon: 'team',
  },
];
