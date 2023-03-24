import type { NextApiRequest, NextApiResponse } from 'next';
import * as SibApivV3Sdk from '@sendinblue/client';
import { genEmailFaleConosco } from '../../mjml/generates/faleConosco';
import { genEmailSejaFornecedor } from '../../mjml/generates/sejaFornecedor';
import { genEmailCadastroImobiliarias } from '../../mjml/generates/cadastroImobiliarias';
import { genEmailOferecaSuaArea } from '../../mjml/generates/oferecaSuaArea';
import { genEmailTrabalheConosco } from '../../mjml/generates/trabalheConosco';

const api_key = `${
  process.env.VERCEL_ENV === 'production'
    ? process.env.SENDINBLUE_KEY
    : process.env.NEXT_PUBLIC_SENDINBLUE_KEY
}`;

const clientMail = new SibApivV3Sdk.TransactionalEmailsApi();

clientMail.setApiKey(
  SibApivV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  api_key
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodyData = req.body;

  let emailTo = '';
  let emailHTML = '';

  switch (bodyData?.for) {
    case 'fale_conosco':
      emailTo = 'lupema@lupemaengenharia.com.br';
      emailHTML = await genEmailFaleConosco(bodyData);
      break;
    case 'seja_fornecedor':
      emailTo = 'suprimentos@lupemaengenharia.com.br';
      emailHTML = await genEmailSejaFornecedor(bodyData);
      break;
    case 'cadastro_imobiliarias':
      emailTo = 'comercial@lupemaengenharia.com.br';
      emailHTML = await genEmailCadastroImobiliarias(bodyData);
      break;
    case 'ofereca_sua_area':
      emailTo = 'comercial@lupemaengenharia.com.br';
      emailHTML = await genEmailOferecaSuaArea(bodyData);
      break;
    case 'trabalhe_conosco':
      emailTo = 'mailto:lupema@lupemaengenharia.com.br';
      emailHTML = await genEmailTrabalheConosco(bodyData);
      break;
  }

  const result = await clientMail.sendTransacEmail({
    to: [{ name: 'Lupema', email: `${emailTo}` }],
    sender: { name: 'Lupema', email: 'lupema@lupemaengenharia.com.br' },
    subject: bodyData?.subject,
    htmlContent: emailHTML,
  });

  if (result.body.messageId) {
    res.send({ success: true });
  }

  res.send({ success: false });
}
