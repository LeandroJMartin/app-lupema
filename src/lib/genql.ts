import { createClient } from '../generated'

const ClientApp = createClient({
  url: 'https://lupema.mayacomunicacao.com.br/graphql',
})

export default ClientApp;
