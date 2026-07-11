import { siteConfig } from '../../config/site';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { WhatsAppIcon } from '../ui/Icons';

export function FloatingActions() {
  const { showBackTop } = useNavbarScroll();

  return (
    <>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="float-wpp" aria-label="Falar no WhatsApp">
        <WhatsAppIcon size={28} />
      </a>

      <button
        type="button"
        className={`back-top${showBackTop ? ' visible' : ''}`}
        id="backTop"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
