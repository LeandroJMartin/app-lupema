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


export const ExecuteAllQuerys = async () => {
  const [
    { banners }
  ] = await Promise.all([
    await Banners.queryExecute(),
  ]);

  return {
    banners
  };
};
