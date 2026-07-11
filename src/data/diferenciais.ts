export type Diferencial = {
  title: string;
  description: string;
  icon: 'heart' | 'team' | 'shield' | 'clock' | 'calendar' | 'document';
};

export const diferenciais: Diferencial[] = [
  {
    title: 'Humanização',
    description: 'Atendimento acolhedor e personalizado, com atenção às necessidades individuais de cada paciente.',
    icon: 'heart',
  },
  {
    title: 'Equipe Qualificada',
    description: 'Profissionais com experiência comprovada, treinados e preparados para cada tipo de cuidado.',
    icon: 'team',
  },
  {
    title: 'Segurança',
    description: 'Protocolos rigorosos e cuidados que garantem tranquilidade total para a família e o paciente.',
    icon: 'shield',
  },
  {
    title: 'Plantões 12h e 24h',
    description: 'Disponibilidade contínua conforme a necessidade da família e a condição do paciente.',
    icon: 'clock',
  },
  {
    title: 'Finais de Semana',
    description: 'Assistência disponível nos fins de semana e feriados — quando você mais precisa.',
    icon: 'calendar',
  },
  {
    title: 'Acompanhamento Personalizado',
    description: 'Cada paciente recebe um plano individual de cuidados adaptado à sua realidade.',
    icon: 'document',
  },
];
