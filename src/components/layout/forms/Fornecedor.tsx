const Fornecedor = () => {
  return (
    <div>
      <h1 className="text-2xl">Seja nosso fornecedor</h1>
      <p className="text-green">
        Quer ser nosso fornecedor? Preencha o formulário abaixo.
      </p>
      <form className="form mt-4">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="name" placeholder="Nome completo" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="tel" name="tel" placeholder="Telefone" />
          <input type="text" name="assunto" placeholder="Assunto" />
          <textarea name="msg" rows={5} placeholder="Mensagem"></textarea>
          <input
            type="submit"
            value="Enviar"
            className="bg-green text-black font-semibold uppercase"
          />
        </div>
      </form>
    </div>
  );
};

export default Fornecedor;
