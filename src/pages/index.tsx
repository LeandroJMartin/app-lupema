import type { NextPage } from 'next';
import AboutHome from '../components/layout/AboutHome';
import EmpSlideHome from '../components/layout/EmpSlideHome';
import HeroApp from '../components/layout/Hero';
import NewsletterApp from '../components/layout/Newsletter';
import {
  Page_Conteusobre,
  Page_Informacoesdecontato,
  RootQueryToBannerConnection,
  RootQueryToEmpreendimentoConnection,
} from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    page: Page_Conteusobre;
    social: Page_Informacoesdecontato;
    banners: RootQueryToBannerConnection;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <HeroApp banners={data.banners} />
      <EmpSlideHome data={data.emp} />
      <AboutHome about={data.page} />
      <NewsletterApp />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { page, banners, empreendimentos, pageBy } = await ClientApp.query({
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
        },
        slug: true,
      },
    },
  });

  return {
    props: {
      data: {
        page: page?.conteuSobre,
        social: pageBy?.informacoesDeContato,
        banners: banners,
        emp: empreendimentos,
      },
    },
    revalidate: 30,
  };
};
