import { NextPage } from 'next';
import { BsFacebook } from 'react-icons/bs';

const ClientArea: NextPage = () => {
  return (
    <section className="container py-[40px] md:py-[80px] mt-[100px] sm:mt-[74px]">
      <h1 className="title mb-6">Área do Cliente</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <p>
            A Lupema conta com um portal de atendimento exclusivo para seus
            clientes. Através deste portal, o cliente tem acesso aos mais
            variados serviços online. Confira abaixo:
          </p>
          <div className="my-6">
            <a href="" className="text-green font-semibold mb-2 w-max block">
              • Imprimir 2ª via de boletos
            </a>
            <a href="" className="text-green font-semibold mb-2 w-max block">
              • Atualizar seu cadastro
            </a>
            <a href="" className="text-green font-semibold w-max block">
              • Informações financeiras
            </a>
          </div>
          <h2 className="text-2xl font-medium text-green mt-12 mb-4">
            Atendimento exclusivo para o Cliente Lupema
          </h2>
          <strong>Entre em contato através do telefone ou WhatsApp.</strong>
          <p className="text-sm">
            * Horário de atendimento: de segunda a quinta-feira, das 8h às 18h e
            sexta-feira das 8h às 17h.
          </p>
          <div className="flex items-center mt-6">
            <a href="tel:+551740092300" className="button mr-4">
              17 4009 2300
            </a>
            <a href="tel:+5517996430381" className="button">
              17 996430381
            </a>
            <a href="https://facebook.com" className="ml-4">
              <BsFacebook size={30} className="text-green" />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4">
            *O acesso ao portal Lupema é fornecido na assinatura do contrato.
            Caso tenha perdido seu acesso, entre em contato com o SAC.
          </p>
          <a
            href="https://lupema-portal.sienge.com.br/authentication/signin"
            className="uppercase text-green border border-green py-3 px-4 w-full block text-center hover:bg-green hover:text-black transition"
          >
            Acesse o portal do cliente Lupema
          </a>
          <div className="text-white bg-green py-6 px-6 text-center mt-8">
            <h3 className="block text-3xl mb-3">
              Demonstrativo para Imposto de Renda
            </h3>
            <p>
              Informamos que o demonstrativo do imposto de renda já está
              disponível.
              <a href="#" className="text-black ml-2">
                Clique aqui para acessar.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;
