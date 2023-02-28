import { SiWhatsapp } from 'react-icons/si';
import { Page_Informacoesdecontato } from '../../generated';

interface Props {
  data: Page_Informacoesdecontato;
}

const WhatsApp = ({ data }: Props) => {
  const number = data.coWhatsapp?.replace(/\s/g, '');

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=55${number}`}
      className="fixed bottom-6 right-6"
    >
      <SiWhatsapp size={25} className="text-green" />
    </a>
  );
};

export default WhatsApp;
