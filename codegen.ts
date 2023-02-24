
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://lupema.mayacomunicacao.com.br/graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
