import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CoolText from '../layout/CoolText';
import Logo from '../../../public/logo-2.svg';
import { Page_Informacoesdecontato } from '../../generated';

interface Props {
  data: Page_Informacoesdecontato;
}

const FooterApp = ({ data }: Props) => {
  return (
    <footer className="bg-bgi pt-[40px] text-white">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-[40px] border-b border-b-zinc-700/90">
          <Link href="/" className="cursor-pointer w-[350px]">
            <Image src={Logo} width={225} height={100} alt="Logo Lupema" />
          </Link>
          <div className="flex gap-8 mt-6 sm:mt-0">
            <a href={data.linkFacebook} arial-label="Button Facebook">
              <BsFacebook size={18} className="hover:text-green" />
            </a>
            <a href={data.linkInstagram} arial-label="Button Instagram">
              <BsInstagram size={18} className="hover:text-green" />
            </a>
            <a href={data.linkYoutube} arial-label="Button Youtube">
              <BsYoutube size={20} className="hover:text-green" />
            </a>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-2 xl:grid-cols-5 gap-6 pt-[40px]">
        <div className="col-span-2">
          <h2 className="text-green text-2xl">Fale com a Lupema:</h2>
          <a href={`tel:+55${data.coTelefone}`} className="block my-4 text-xl">
            {data.coTelefone}
          </a>
          {
            <a
              href="mail:lupema@lupemaengenharia.com.br"
              className="block my-4 text-lg mb-6"
            >
              {data.coEmail}
            </a>
          }
          <a href="/central-de-relacionamento" className="button my-4 text-sm">
            Central de relacionamentos
          </a>
          <a href="/canal-de-vendas" className="button my-4 text-sm">
            Canal de vendas
          </a>
        </div>
        <div className="space-y-3">
          <h2 className="text-green text-lg">Encontre seu Lupema</h2>
          <Link
            href="/empreendimentos/concluido"
            className="block hover:text-green"
          >
            Concluído
          </Link>
          <Link
            href="/empreendimentos/em-andamento"
            className="block hover:text-green"
          >
            Em Andamento
          </Link>
          <Link
            href="/empreendimentos/lancamento"
            className="block hover:text-green"
          >
            Lançamento
          </Link>
          <Link
            href="/empreendimentos/pronto-para-morar"
            className="block hover:text-green"
          >
            Pronto para Morar
          </Link>
          <Link
            href="/empreendimentos/breve-lancamento"
            className="block hover:text-green"
          >
            Breve Lançamento
          </Link>
        </div>
        <div className="space-y-3">
          <Link
            href="/politica-de-privacidade"
            className="block hover:text-green"
          >
            Política de privacidade
          </Link>
          <Link href="/codigo-de-etica" className="block hover:text-green">
            Código de ética
          </Link>
          <Link href="/termos-de-uso" className="block hover:text-green">
            Termos de uso
          </Link>
          <Link href="/protecao-de-dados" className="block hover:text-green">
            Proteção de dados
          </Link>
          <Link href="/informacoes-legais" className="block hover:text-green">
            Informações legais
          </Link>
        </div>
        <div className="space-y-3">
          <Link
            href="/contato#trabalhe-conosco"
            className="block hover:text-green"
          >
            Trabalhe conosco
          </Link>
          <Link
            href="/contato#seja-nosso-forncedor"
            className="block hover:text-green"
          >
            Seja nosso fornecedor
          </Link>
          <Link
            href="/cadastro-de-corretores"
            className="block hover:text-green"
          >
            Cadastro de corretores
          </Link>
          <Link href="/central-de-vizinhos" className="block hover:text-green">
            Central de vizinhos
          </Link>
          <Link
            href="/contato#ofereca-sua-area"
            className="block hover:text-green"
          >
            Ofereça sua área
          </Link>
          <Link href="/assessoria" className="block hover:text-green">
            Imprensa
          </Link>
        </div>
      </div>
      <CoolText />
    </footer>
  );
};

export default FooterApp;
