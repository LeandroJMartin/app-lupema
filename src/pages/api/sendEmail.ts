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

const email = '@@@';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodyData = req.body;

  let emailHTML = '';

  switch (bodyData?.for) {
    case 'fale_conosco':
      emailHTML = await genEmailFaleConosco(bodyData);
      break;
    case 'seja_fornecedor':
      emailHTML = await genEmailSejaFornecedor(bodyData);
      break;
    case 'cadastro_imobiliarias':
      emailHTML = await genEmailCadastroImobiliarias(bodyData);
      break;
    case 'ofereca_sua_area':
      emailHTML = await genEmailOferecaSuaArea(bodyData);
      break;
    case 'trabalhe_conosco':
      emailHTML = await genEmailTrabalheConosco(bodyData);
      break;
  }

  const result = await clientMail.sendTransacEmail({
    to: [{ name: 'Renan', email: 'rodilon10@gmail.com' }],
    sender: { name: 'Lupema', email: 'lupema@lupema.com.br' },
    subject: bodyData?.subject,
    htmlContent: emailHTML,
  });

  if (result.body.messageId) {
    res.send({ success: true });
  }

  res.send({ success: false });
}
