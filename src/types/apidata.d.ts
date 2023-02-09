import { Page_Conteusobre, RootQueryToBannerConnection } from "../generated/graphql";

export interface ApiData {
  apiData: {
    banners?: RootQueryToBannerConnection,
    about?: Page_Conteusobre
  }
}
