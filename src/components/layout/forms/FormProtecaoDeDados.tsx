import { useState } from 'react';

const objetos = [
  'Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo',
  'Corrigir seus dados, ao solicitar a edição, correção ou atualização destes',
  'imitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação',
  'Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a (nome empresarial simplificado) trata a seu respeito, de acordo com a regulamentação da autoridade nacional, respeitados os segredos comercial e industrial',
  'Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei',
  'Revogar seu consentimento, desautorizando o tratamento de seus dados',
  'Informar-se sobre quais entidades públicas e privadas o controlador realizou o uso compartilhado de dados',
  'Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa',
];

const FormProtecarDeDados = () => {
  const [option, setOption] = useState(-1);

  const list = objetos.map((element, index) => {
    return (
      <li
        key={index}
        className={`block my-3 border border-black/20 rounded-md py-2 px-3 relative cursor-pointer hover:bg-green ${
          option === index ? 'bg-green' : 'bg-white'
        }`}
        onClick={() => setOption(index)}
      >
        <span className="font-bold mr-2 text-lg">{index + 1}.</span>
        {element}
      </li>
    );
  });

  return (
    <form action="" className="form">
      <ul className="my-8 block">{list}</ul>
      <h2 className="text-xl font-bold mt-4">DADOS DO TITULAR SOLICITANTE</h2>
      <small className="italic mb-4 block">
        Dados necessário para localização perfeita do titular
      </small>
      <input type="text" name="name" placeholder="Seu nome" required />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        className="my-4"
        required
      />
      <input type="tel" name="tel" placeholder="Telefone" required />
      <label htmlFor="aceite" className="my-4 inline-block">
        <input type="checkbox" name="termos" id="aceite" required />
        <span className="ml-2">
          Li e concordo com a
          <a href="/politica-de-privacidade" className="ml-2 underline italic">
            política de privacidade
          </a>
        </span>
      </label>
      <input
        type="submit"
        value="Enviar"
        className="bg-green text-black uppercase font-semibold"
      />
    </form>
  );
};

export default FormProtecarDeDados;
