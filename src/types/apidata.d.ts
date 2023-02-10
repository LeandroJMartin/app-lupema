import { Page_Conteusobre, RootQueryToBannerConnection } from "../generated/graphql";

export interface ApiData {
  apiData: {
    banners?: RootQueryToBannerConnection,
    about: {
      AboutHome?: Page_Conteusobre,
      AboutPage?: Page_Conteusobre
    }
  }
}
