const OferecaSuaArea = () => {
  return (
    <div>
      <h1 className="text-2xl">Ofereça sua área</h1>
      <p className="text-green">
        Tem uma área onde podemos construir um empreendimento Lupema? Fale
        conosco.
      </p>
      <form className="form mt-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            className="col-span-2"
          />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="tel" name="tel" placeholder="Telefone" />
          <input
            type="text"
            name="localidade"
            placeholder="Localidade do terreno"
            className="col-span-2"
          />
          <input
            type="text"
            name="assunto"
            placeholder="Assunto"
            className="col-span-2"
          />
          <textarea
            name="msg"
            rows={5}
            placeholder="Mensagem"
            className="col-span-2"
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className="bg-green text-black font-semibold uppercase col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default OferecaSuaArea;
