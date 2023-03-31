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
import { useMenuMobileContext } from '../../context/menuMobileContext';
import { Page_Informacoesdecontato } from '../../generated';

interface Props {
  data: Page_Informacoesdecontato;
}

interface Links {
  path: string;
  label: string;
}

const MenuApp = ({ data }: Props) => {
  const { state: status, toogleState } = useMenuMobileContext();

  const LinkPath = ({ path, label }: Links) => {
    return (
      <Link href={path} className="hover:text-green">
        {label}
      </Link>
    );
  };

  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between sm:justify-start w-full">
        <button
          aria-label="Botão hamburger menu"
          className="pr-0 md:pr-8 order-2 md:order-1 "
          onClick={(e) => toogleState()}
        >
          <IoMdClose size={35} className="hover:rotate-90 transition-all" />
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
          <LinkPath path="/empreendimentos/todos" label="Empreendimentos" />
          <LinkPath path="/noticias" label="Notícias" />
          <LinkPath path="/assessoria" label="Imprensa" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-3 md:space-y-4 text-xl">
            <LinkPath path="/contato#fale-conosco" label="Fale Conosco" />
            <LinkPath
              path="/contato#trabalhe-conosco"
              label="Trabalhe Conosco"
            />
            <LinkPath
              path="/contato#seja-nosso-fornecedor"
              label="Seja nosso fornecedor"
            />
            <LinkPath
              path="/contato#ofereca-sua-area"
              label="Ofereça sua área"
            />
          </div>
          <div className="flex flex-col mt-16 space-y-3 md:space-y-4 text-xl">
            <a className="text-green" href="/area-do-corretor">
              Área do corretor
            </a>
            <a className="text-green" href="/area-do-cliente">
              Área do cliente
            </a>
            <a className="text-green" href="/2-via-do-boleto">
              2ª via do boleto
            </a>
            <a className="text-green" href="/assistencia-tecnica">
              Assistência técnica
            </a>
          </div>
        </div>
        <div className="pb-6 sm:pb-0">
          <h2 className="text-green">Siga nossas redes sociais</h2>
          <div className="flex items-center justify-center sm:justify-start mt-2 space-x-3">
            <a href={data.linkFacebook}>
              <IoLogoFacebook size={20} className="hover:text-green" />
            </a>
            <a className="px-3" href={data.linkInstagram}>
              <IoLogoInstagram size={20} className="hover:text-green" />
            </a>
            <a href={data.linkYoutube}>
              <IoLogoYoutube size={20} className="hover:text-green" />
            </a>
          </div>
          <h2 className="text-green mt-8">Fale com a Lupema</h2>
          <a href={`tel:+55${data.coTelefone}`} className="block">
            {data.coTelefone}
          </a>
          <a href={`mailto:${data.coEmail}`} className="block">
            {data.coEmail}
          </a>
          <div className="flex items-center justify-center sm:justify-start text-green my-12">
            <GoLocation size={24} />
            <h2 className="ml-3">Como chegar na Lstore</h2>
          </div>
          <h2 className="text-green mb-2">Escritório</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: data.coEndereco || '',
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default MenuApp;
