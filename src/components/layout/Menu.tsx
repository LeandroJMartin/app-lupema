import Image from 'next/image';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoMdClose,
} from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import Logo from '../../../public/logo-2.svg';

interface Links {
  path: string;
  label: string;
}

const MenuApp = () => {
  const LinkPath = ({ path, label }: Links) => {
    return (
      <Link href={path} className="">
        {label}
      </Link>
    );
  };

  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between sm:justify-start w-full">
        <button className="pr-0 md:pr-8 order-2 md:order-1">
          <IoMdClose size={35} />
        </button>
        <Image
          src={Logo}
          alt="Logo Lupema Engenharia"
          width={220}
          height={39}
          className="order=1 md:order-2"
        />
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-[40px] sm:mt-[80px] text-center sm:text-left px-0 sm:px-2 xl:px-[100px]">
        <div className="flex flex-col space-y-6 xl:space-y-20 text-3xl xl:text-4xl">
          <LinkPath path="/a-lupema" label="A Lupema" />
          <LinkPath path="/empreendimentos" label="Empreendimentos" />
          <LinkPath path="/noticias" label="Notícias" />
          <LinkPath path="/imprensa" label="Imprensa" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-3 md:space-y-4 text-xl">
            <LinkPath path="/contato" label="Fale Conosco" />
            <LinkPath path="/contato" label="Trabalhe Conosco" />
            <LinkPath path="/contato" label="Seja nosso fonosco" />
            <LinkPath path="/contato" label="Ofereça sua área" />
          </div>
          <div className="flex flex-col mt-16 space-y-3 md:space-y-4 text-xl">
            <a className="text-green" href="#area-do-corretor">
              Área do corretor
            </a>
            <a className="text-green" href="#area-do-cliente">
              Área do cliente
            </a>
            <a className="text-green" href="#2-via-do-boleto">
              2ª via do boleto
            </a>
            <a className="text-green" href="#assistencia-tecnica">
              Assistência técnica
            </a>
          </div>
        </div>
        <div className="pb-6 sm:pb-0">
          <h2 className="text-green">Siga nossas redes sociais</h2>
          <div className="flex items-center justify-center sm:justify-start mt-2 space-x-3">
            <a href="#facebook">
              <IoLogoFacebook size={20} />
            </a>
            <a className="px-3" href="#instagram">
              <IoLogoInstagram size={20} />
            </a>
            <a href="#youtube">
              <IoLogoYoutube size={20} />
            </a>
          </div>
          <h2 className="text-green mt-8">Fale com a Lupema</h2>
          <a href="tel:+5517400092300">17 40009 2300</a>
          <a href="mailto:lupema@lupemaengenharia.com.br">
            lupema@lupemaengenharia.com.br
          </a>
          <div className="flex items-center justify-center sm:justify-start text-green my-12">
            <GoLocation size={24} />
            <h2 className="ml-3">Como chegar na Lstore</h2>
          </div>
          <h2 className="text-green mb-2">Escritório</h2>
          <p>Rua Floriano Peixoto, 3444</p>
          <p>Santos Dumont</p>
          <p>São José do Rio Preto - SP</p>
        </div>
      </main>
    </div>
  );
};

export default MenuApp;
