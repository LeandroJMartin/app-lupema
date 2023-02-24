import type { NextPage } from 'next';
import AboutHome from '../components/layout/AboutHome';
import EmpSlideHome from '../components/layout/EmpSlideHome';
import HeroApp from '../components/layout/Hero';
import NewsletterApp from '../components/layout/Newsletter';
import {
  Page_Conteusobre,
  RootQueryToBannerConnection,
  RootQueryToEmpreendimentoConnection,
} from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    about: Page_Conteusobre;
    banners: RootQueryToBannerConnection;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <HeroApp banners={data.banners} />
      <EmpSlideHome data={data.emp} />
      <AboutHome about={data.about} />
      <NewsletterApp />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { page, banners, empreendimentos } = await ClientApp.query({
    page: [
      {
        id: '2',
        idType: 'DATABASE_ID',
      },
      {
        conteuSobre: {
          tituloSobreHome: true,
          descricaoSobreHome: true,
          imagem1: {
            sourceUrl: true,
          },
          imagem2: {
            sourceUrl: true,
          },
        },
      },
    ],
    banners: {
      nodes: {
        banner_home: {
          bhConteudo: {
            bhImagemDesktop: {
              sourceUrl: true,
            },
            bhImagemMobile: {
              sourceUrl: true,
            },
            bhLinkBanner: true,
            bhMetrosQuadrado: true,
            bhMetrosQuadradoMaior: true,
            bhNomeDoEmpreendimento: true,
            bhNovaAba: true,
            bhQuantDormitorios: true,
            bhQuantVagasGaragem: true,
            bhTextoDoBotao: true,
          },
          imagensProntas: {
            abrirEmUmaNovaAba: true,
            linkDoBannerP: true,
            imagemMobileP: {
              sourceUrl: true,
            },
            imagemDesktopP: {
              sourceUrl: true,
            },
          },
        },
      },
    },
    empreendimentos: {
      nodes: {
        empreendimento: {
          imagemPrincipal: {
            sourceUrl: true,
          },
          nomeDoEmpreendimento: true,
          estagioDaObra: {
            name: true,
            slug: true,
          },
          empCidade: true,
          empMetragem: true,
          empDormitorios: true,
          empVagasDeGaragem: true,
          empValorAPartirDe: true,
        },
        slug: true,
      },
    },
  });

  return {
    props: {
      data: {
        about: page?.conteuSobre,
        banners: banners,
        emp: empreendimentos,
      },
    },
    revalidate: 30,
  };
};
