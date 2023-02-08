import { Page, RootQueryToBannerConnection } from "../generated/graphql";

export interface ApiData {
  apiData: {
    banners?: RootQueryToBannerConnection
  }
}
