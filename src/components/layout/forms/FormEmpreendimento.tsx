import React from 'react';

const FormEmpreendimento = () => {
  return (
    <form className="flex flex-col w-full space-y-8 [&>label]:text-white">
      <input type="text" placeholder="Nome" name="nome" />
      <input type="email" placeholder="E-mail" name="email" />
      <input type="tel" placeholder="Telefone" name="telefone" />

      <input
        type="submit"
        value="Enviar"
        className="bg-green text-black text-lg font-bold"
      />

      <label htmlFor="termsCheck">
        <input
          type="checkbox"
          name=""
          id="termsCheck"
          className="inline-block mr-2"
        />
        Li e concordo com os{' '}
        <span className="underline">
          <i>termos de uso</i>
        </span>{' '}
        e{' '}
        <span className="underline">
          <i>política de privacidade</i>
        </span>
      </label>
    </form>
  );
};

export default FormEmpreendimento;
