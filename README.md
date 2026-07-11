# Mara Hospitalar

Landing page institucional da **Mara Hospitalar** — assistência domiciliar humanizada em Florianópolis e região.

Stack: **Vite + React + TypeScript**

## Estrutura do projeto

```
mara-hospitalar/
├── public/                 # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── assets/images/      # Imagens do site
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, FloatingActions
│   │   ├── sections/     # Seções da landing page
│   │   └── ui/             # Ícones e componentes reutilizáveis
│   ├── config/
│   │   └── site.ts         # WhatsApp, telefone, endereço
│   ├── data/               # Conteúdo (serviços, depoimentos, etc.)
│   ├── hooks/              # Lógica de scroll, carrossel, reveal
│   ├── pages/
│   │   └── HomePage.tsx    # Página principal
│   ├── styles/             # CSS do design original
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Personalização

Edite `src/config/site.ts` para alterar WhatsApp, telefone e endereço.

Conteúdo das seções em `src/data/`.

Estilos em `src/styles/`.

## Versão estática anterior

A versão HTML pura foi preservada em `../mara-hospitalar-static/`.
