import { gql } from '@apollo/client';
import { getClient } from './apollo';

const ApolloClient = getClient();

export const Banners = {
  postType: 'banners',
  acf: 'banner_home',

  query: function () {
    return gql`
      query GetBanners {
        ${this.postType} {
          nodes {
            ${this.acf} {
              bannerPronto
              imagensProntas {
                imagemDesktopP {
                  sourceUrl
                }
                imagemMobileP {
                  sourceUrl
                }
                linkDoBannerP
                abrirEmUmaNovaAba
              }
              bhConteudo {
                bhImagemDesktop {
                  sourceUrl
                }
                bhImagemMobile {
                  sourceUrl
                }
                bhNomeDoEmpreendimento
                bhQuantDormitorios
                bhQuantVagasGaragem
                bhMetrosQuadrado
                bhMetrosQuadradoMaior
                bhTextoDoBotao
                bhLinkBanner
                bhNovaAba
              }
            }
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      banners: result.banners
    }

  }
};

export const About = {
  postType: 'page',
  acf: 'conteuSobre',

  query: function () {
    return gql`
      query GetBanners {
        ${this.postType}(id: "2", idType: DATABASE_ID) {
          ${this.acf} {
            descricao
            titulo
            linkDoVideo
            linkDoTourVirtual
            imagembannerDoTourVirtual {
              sourceUrl
            }
            imagem2 {
              sourceUrl
            }
            imagem1 {
              sourceUrl
            }
            descricaoLstore
            descricaoVideo
            imagensSelos {
              sourceUrl
            }
            tituloLstore
            tituloVideo
            item {
              nomeDoEmpreendimento
              data
            }
          }
        },
        aboutHome: ${this.postType}(id: "2", idType: DATABASE_ID) {
          ${this.acf} {
            imagem2 {
              sourceUrl
            }
            imagem1 {
              sourceUrl
            }
            descricaoSobreHome
            tituloSobreHome
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const about = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      about
    }
  }
};


export const ExecuteAllQuerys = async () => {
  const [
    { banners },
    { about }
  ] = await Promise.all([
    await Banners.queryExecute(),
    await About.queryExecute(),
  ]);

  return {
    banners,
    about: about.aboutHome.conteuSobre
  };
};
