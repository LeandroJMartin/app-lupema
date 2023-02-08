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

    const banners = result[this.postType].nodes?.map((item: any) => {
      return {
        checker: item[this.acf]?.bannerPronto || null,
        art: {
          ImgProntaDeskUrl: item[this.acf]?.imagensProntas?.imagemDesktopP?.sourceUrl || null,
          ImgProntaMobiUrl: item[this.acf]?.imagensProntas?.imagemMobileP?.sourceUrl || null,
          UrlPronta: item[this.acf]?.imagensProntas?.bhLinkBanner || null,
          LinkProntaEx: item[this.acf]?.imagensProntas?.abrirEmUmaNovaAba || null,
        },
        custom: {
          ImgDesktopUrl: item[this.acf]?.bhConteudo?.bhImagemDesktop?.sourceUrl || null,
          ImgMobileUrl: item[this.acf]?.bhConteudo?.bhImagemMobile?.sourceUrl || null,
          Title: item[this.acf]?.bhConteudo?.bhNomeDoEmpreendimento || null,
          Dormitorios: item[this.acf]?.bhConteudo?.bhQuantDormitorios || null,
          Vagas: item[this.acf]?.bhConteudo?.bhQuantVagasGaragem || null,
          MetrosMin: item[this.acf]?.bhConteudo?.bhMetrosQuadrado || null,
          MetrosMax: item[this.acf]?.bhConteudo?.bhMetrosQuadradoMaior || null,
          LabelButton: item[this.acf]?.bhConteudo?.bhTextoDoBotao || null,
          Url: item[this.acf]?.bhConteudo?.bhLinkBanner || null,
          LinkExterno: item[this.acf]?.bhConteudo?.bhNovaAba || null
        }
      }
    })

    return {
      banners
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
