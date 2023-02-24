import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CoolText from '../layout/CoolText';
import Logo from '../../../public/logo-footer.svg';

const FooterApp = () => {
  return (
    <footer className="bg-bgi pt-[40px] sm:pt-[60px] text-white">
      <div className="container grid grid-cols-2 xl:grid-cols-6 gap-6">
        <div className="col-span-2 xl:col-span-2">
          <h2 className="text-green text-3xl">Fale com a Lupema:</h2>
          <a href="tel:+551740092300" className="block my-4 text-xl">
            17 4009 2300
          </a>
          <a href="" className="button my-4 text-sm">
            Central de relacionamentos
          </a>
          <a href="" className="button my-4 text-sm">
            Canal de vendas
          </a>
          <div className="flex gap-5">
            <a href="#facebook">
              <BsFacebook size={18} />
            </a>
            <a href="#instagram">
              <BsInstagram size={18} />
            </a>
            <a href="#youtube">
              <BsYoutube size={20} />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-green text-lg">Fale com a Lupema</h2>
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
            href="#politica-de-privacidade"
            className="block hover:text-green"
          >
            Política de privacidade
          </Link>
          <Link href="#codigo-de-etica" className="block hover:text-green">
            Código de ética
          </Link>
          <Link href="#termos-de-uso" className="block hover:text-green">
            Termos de uso
          </Link>
          <Link href="#protecao-de-dados" className="block hover:text-green">
            Proteção de dados
          </Link>
          <Link href="#informacoes-legais" className="block hover:text-green">
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
            href="#cadastro-de-corretores"
            className="block hover:text-green"
          >
            Cadastro de corretores
          </Link>
          <Link href="#central-de-vizinhos" className="block hover:text-green">
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
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} width={225} height={100} alt="Logo Lupema" />
        </Link>
      </div>
      <CoolText />
    </footer>
  );
};

export default FooterApp;
