import { useEffect, useState } from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { Page_Informacoesdecontato } from '../../generated';

interface Props {
  data: Page_Informacoesdecontato;
}

const WhatsApp = ({ data }: Props) => {
  const number = data.coWhatsapp?.replace(/\s/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={`tel:${data.coTelefone}`}>
        <MdWifiCalling3
          size={35}
          className="text-black bg-green rounded-full py-1 px-1 block mb-3"
        />
      </a>

      <a href={`https://api.whatsapp.com/send?phone=55${number}`}>
        <RiWhatsappFill size={40} className="text-green" />
      </a>
    </div>
  );
};

export default WhatsApp;
