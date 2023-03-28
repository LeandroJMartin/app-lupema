import { useEffect, useState } from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { Page_Informacoesdecontato } from '../../generated';

interface Props {
  data: Page_Informacoesdecontato;
}

const WhatsApp = ({ data }: Props) => {
  const number = data.coWhatsapp?.replace(/\s/g, '');

  const [device, setDevice] = useState(false);
  function CheckResize() {
    if (window.innerWidth < 1070) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  }

  useEffect(() => {
    CheckResize();
    window.addEventListener('resize', CheckResize);
    return () => window.removeEventListener('resize', CheckResize);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {device && (
        <a href={`tel:${data.coTelefone}`} aria-label="Botão Telefone">
          <MdWifiCalling3
            size={35}
            className="text-black bg-green rounded-full py-1 px-1 block mb-3"
          />
        </a>
      )}

      <a
        href={`https://api.whatsapp.com/send?phone=55${number}`}
        aria-label="Botão WhatsApp"
      >
        <RiWhatsappFill size={40} className="text-green" />
      </a>
    </div>
  );
};

export default WhatsApp;
