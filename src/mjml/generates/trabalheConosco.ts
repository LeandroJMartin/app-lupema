import { readFile } from 'node:fs/promises';
import Handlebars from 'handlebars';
import mjml2html from 'mjml';
import path from 'node:path';

const mjmlPath = path.resolve('./src/mjml');

export const genEmailTrabalheConosco = async (ctx: Ctx) => {
  const mjmlFile = await readFile(`${mjmlPath}/trabalhe_conosco.mjml`, {
    encoding: 'utf-8'
  });

  const template = Handlebars.compile(mjmlFile);

  const mjml = template(ctx);

  const { html } = mjml2html(mjml);

  return html;
};

type Ctx = {
    opcaoArea: string;
    pretensao_salarial: string;
    area_de_interesse: string;
    nome: string;
    email: string;
    data_nascimento: string;
    idade: string;
    estado_civil: string;
    filhos: string;
    filhos_quantidade: string;
    endereco: string;
    num: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    telFixo: string;
    celular1: string;
    operadora1: string;
    celular2: string;
    operadora2: string;
    telefoneRecado: string;
    nomeRecado: string;
    ensino: string;
    graduacao: string;
    anoformacao: string;
    entidadeEscolar: string;
    outroscursos: string;
    empresa1: string;
    periodo1: string;
    funcao1: string;
    atribuicoes1: string;
    empresa2: string;
    periodo2: string;
    funcao2: string;
    atribuicoes2: string;
    empresa3: string;
    periodo3: string;
    funcao3: string;
    atribuicoes3: string;
};
