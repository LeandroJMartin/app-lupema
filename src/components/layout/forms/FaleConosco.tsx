const FaleConosco = () => {
  return (
    <div>
      <h1 className="text-2xl">Fale conosco</h1>
      <p className="text-green">
        Entre em contato com a Lupema e tire suas dúvidas.
      </p>
      <form action="" method="post" className="form grid grid-cols-1 gap-4">
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="tel" name="tel" placeholder="Telefone" />
        <textarea name="msg" rows={4} placeholder="Mensagem"></textarea>
        <select name="assunto">
          <option value="duvida">Dúvida</option>
          <option value="sugestao">Sugestão</option>
          <option value="reclamacao">Reclamação</option>
          <option value="vizinho">Sou vizinho de uma obra</option>
          <option value="imprensa">Imprensa</option>
        </select>
        <input
          type="submit"
          value="Enviar"
          className="bg-green text-black uppercase font-semibold"
        />
        <label htmlFor="aceite">
          <input type="checkbox" name="aceite" id="aceite" />
          <span className="ml-2">
            Li e concordo com os
            <a href="#" className="mx-2 underline italic">
              termos de uso
            </a>
            e
            <a href="#" className="ml-2 underline italic">
              política de privacidade
            </a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default FaleConosco;
