export type Depoimento = {
  text: string;
  name: string;
  role: string;
};

// Conteúdo demo — substituir por depoimentos reais quando disponíveis
export const depoimentos: Depoimento[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem Ipsum',
    role: 'Familiar de paciente',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Dolor Sit',
    role: 'Filho de paciente',
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Amet Consectetur',
    role: 'Neta de paciente',
  },
  {
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Adipiscing Elit',
    role: 'Esposa de paciente',
  },
  {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    name: 'Tempor Incididunt',
    role: 'Familiar de paciente',
  },
];
