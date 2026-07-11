import { siteConfig } from '../../config/site';
import { WhatsAppIcon } from '../ui/Icons';

export function CtaSection() {
  return (
    <div className="cta-faixa">
      <h2 className="reveal">Seu familiar merece um cuidado humanizado.</h2>
      <p className="reveal reveal-delay-1">
        Fale conosco pelo WhatsApp e solicite um atendimento personalizado.
        <br />
        Estamos prontos para cuidar com o carinho que sua família merece.
      </p>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="btn-wpp reveal reveal-delay-2">
        <WhatsAppIcon size={22} />
        Falar no WhatsApp Agora
      </a>
    </div>
  );
}
