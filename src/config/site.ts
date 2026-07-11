const whatsappMessage =
  'Olá! Vi o site da Mara Hospitalar e gostaria de solicitar informações sobre assistência domiciliar.';

export const siteConfig = {
  name: 'Mara Hospitalar',
  tagline: 'Assistência Domiciliar',
  whatsapp: '5548996168396',
  whatsappMessage,
  whatsappUrl: `https://wa.me/5548996168396?text=${encodeURIComponent(whatsappMessage)}`,
  instagramUrl: 'https://www.instagram.com/mara_hospitalar/',
  phone: '(48) 99616-8396',
  city: 'Florianópolis, Santa Catarina',
  hours: 'Seg–Sex: 7h às 20h · Sáb–Dom: 8h às 18h',
  founder: 'Mara Cristina',
  founderRole: 'Fundadora & Diretora',
} as const;
