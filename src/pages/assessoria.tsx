import { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: Page;
}

const AssessoriaApp: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className="relative h-[200px] sm:h-[350px] md:h-[500px] border-b-4 border-b-green">
        <Image
          src={data.featuredImage?.node.sourceUrl || ''}
          alt="Imagem Empreendimentos Lupema"
          fill
          className="object-cover"
        />
        <div className="bg-black/20 absolute top-0 left-0 right-0 z-10 w-full h-full"></div>
      </div>
      <section className="bg-bgi py-[40px] md:py-[80px]">
        <div className="container text-white">
          <h1 className="title">{data.title}</h1>
          <p>{data.assessoria?.assInformacoes}</p>
          <h3 className="text-xl text-green my-4">
            {data.assessoria?.assNometitulo}
          </h3>
          <div className="flex items-center">
            <a href={`tel:+${data.assessoria?.assTelefone}`}>
              {data.assessoria?.assTelefone}
            </a>
            <span className="mx-3">|</span>
            <a href={`mailto:${data.assessoria?.assEmail}`}>
              {data.assessoria?.assEmail}
            </a>
          </div>
          <form action="" method="POST" className="mt-4">
            <input className="w-full mb-4" type="text" placeholder="Nome" />
            <input
              className="w-full mb-4"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <input
              className="w-full mb-4"
              type="tel"
              name="tel"
              placeholder="Telefone"
            />
            <input className="w-full mb-4" type="submit" value="Enviar" />
            <label htmlFor="aceite">
              <input type="checkbox" name="aceite" id="aceite" required />
              <span>
                Li e concordo com os{' '}
                <a href="#termos de uso" className="italic underline">
                  termos de uso
                </a>
                e{' '}
                <a href="#politica de privacidade" className="italic underline">
                  política de privacidade
                </a>
              </span>
            </label>
          </form>
        </div>
      </section>
    </>
  );
};

export default AssessoriaApp;

export const getStaticProps = async () => {
  const { page } = await ClientApp.query({
    page: [
      {
        id: '82',
        idType: 'DATABASE_ID',
      },
      {
        title: true,
        featuredImage: {
          node: {
            sourceUrl: true,
          },
        },
        assessoria: {
          assInformacoes: true,
          assNometitulo: true,
          assEmail: true,
          assTelefone: true,
        },
      },
    ],
  });

  return {
    props: { data: page },
    revalidate: 30,
  };
};
