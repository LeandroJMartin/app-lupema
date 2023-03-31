import { NextPage } from 'next';
import Image from 'next/image';
import DownloadsApp from '../components/layout/Downloads';
import {
  Page,
  Page_Informacoesdecontato,
  RootQueryToArquivoAssessoriaConnection,
} from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    page: Page;
    materias: RootQueryToArquivoAssessoriaConnection;
    social: Page_Informacoesdecontato;
  };
}

const AssessoriaApp: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className="relative h-[200px] sm:h-[350px] md:h-[500px] border-b-4 border-b-green">
        <Image
          src={data.page.featuredImage?.node.sourceUrl || ''}
          alt="Imagem Empreendimentos Lupema"
          fill
          className="object-cover"
        />
        <div className="bg-black/20 absolute top-0 left-0 right-0 z-10 w-full h-full"></div>
      </div>
      <section className="bg-bgi py-[40px] md:py-[80px]">
        <div className="container w-full sm:w-[80%] xl:w-[50%] text-white text-center">
          <h1 className="title">{data.page.title}</h1>
          <p>{data.page.assessoria?.assInformacoes}</p>
          <h3 className="text-2xl text-green my-4">
            {data.page.assessoria?.assNometitulo}
          </h3>
          <div className="flex items-center justify-center text-xl">
            <a href={`tel:+${data.page.assessoria?.assTelefone}`}>
              {data.page.assessoria?.assTelefone}
            </a>
            <span className="mx-3">|</span>
            <a href={`mailto:${data.page.assessoria?.assEmail}`}>
              {data.page.assessoria?.assEmail}
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
            <input
              className="w-full mb-4 bg-green text-black uppercase font-bold"
              type="submit"
              value="Enviar"
            />
            <label htmlFor="aceite">
              <input type="checkbox" name="aceite" id="aceite" required />
              <span className="ml-2">
                Li e concordo com os
                <a href="#termos de uso" className="italic underline mx-2">
                  termos de uso
                </a>
                e
                <a
                  href="#politica de privacidade"
                  className="italic underline ml-2"
                >
                  política de privacidade
                </a>
              </span>
            </label>
          </form>
        </div>
      </section>
      <section className="bg-bgi border-b border-b-green/50 pb-[40px] md:pb-[80px]">
        <div className="container down">
          <DownloadsApp materias={data.materias} />
        </div>
      </section>
    </>
  );
};

export default AssessoriaApp;

export const getStaticProps = async () => {
  const { page, arquivosAssessoria, pageBy } = await ClientApp.query({
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
    pageBy: [
      {
        pageId: 201,
      },
      {
        informacoesDeContato: {
          coTelefone: true,
          coWhatsapp: true,
          coEmail: true,
          coEndereco: true,
          linkFacebook: true,
          linkInstagram: true,
          linkYoutube: true,
        },
      },
    ],
    arquivosAssessoria: {
      nodes: {
        down_assessoria: {
          downImagem: {
            sourceUrl: true,
          },
          linkDaMateria: true,
          downDescricao: true,
          downTitulo: true,
        },
      },
    },
  });

  return {
    props: {
      data: {
        page: page,
        materias: arquivosAssessoria,
        social: pageBy?.informacoesDeContato,
      },
      revalidate: 30,
    },
  };
};
