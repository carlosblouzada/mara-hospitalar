export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  label: string;
  size: 'large' | 'wide' | 'tall' | 'square';
};

export const siteImages = {
  founder: {
    src: '/images/mara-fundadora.png',
    alt: 'Mara Cristina, fundadora da Mara Hospitalar, em seu escritório',
  },
} as const;

export const galleryImages: GalleryImage[] = [
  {
    id: 'cuidado-domiciliar',
    src: '/images/cuidado-domiciliar.png',
    alt: 'Cuidadora oferecendo assistência domiciliar humanizada a idosa em ambiente acolhedor',
    label: 'Cuidado Domiciliar',
    size: 'large',
  },
  {
    id: 'maos-cuidado',
    src: '/images/maos-cuidado.png',
    alt: 'Mãos unidas simbolizando confiança e cuidado humanizado',
    label: 'Confiança & Carinho',
    size: 'square',
  },
  {
    id: 'atendimento-lar',
    src: '/images/atendimento-lar.png',
    alt: 'Profissional de saúde realizando atendimento domiciliar no lar do paciente',
    label: 'Atendimento no Lar',
    size: 'tall',
  },
  {
    id: 'mara-fundadora',
    src: '/images/mara-fundadora.png',
    alt: 'Mara Cristina, fundadora da Mara Hospitalar',
    label: 'Nossa Fundadora',
    size: 'wide',
  },
];
