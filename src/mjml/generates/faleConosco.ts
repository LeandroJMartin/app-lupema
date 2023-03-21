import { readFile } from 'node:fs/promises';
import Handlebars from 'handlebars';
import mjml2html from 'mjml';
import path from 'node:path';

const mjmlPath = path.resolve('./src/mjml');

export const genEmailFaleConosco = async (ctx: Ctx) => {
  const mjmlFile = await readFile(`${mjmlPath}/fale_conosco.mjml`, {
    encoding: 'utf-8'
  });

  const template = Handlebars.compile(mjmlFile);

  const mjml = template(ctx);

  const { html } = mjml2html(mjml);

  return html;
};

type Ctx = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  assunto: string;
  date: string;
};
