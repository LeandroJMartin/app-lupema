const NewsletterApp = () => {
  return (
    <section className="bg-green py-16">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="text-black">
          <h1 className="text-5xl">Cadastre-se:</h1>
          <p>Informe seu e-mail e receba nossas novidades</p>
        </div>
        <form action="" className="col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="py-2 px-4 w-full sm:w-1/2 mb-4 sm:mb-0"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="py-2 px-4 w-full sm:w-1/2 mb-4 sm:mb-0"
            />
            <input
              type="submit"
              value="Enviar"
              className="py-2 px-4 bg-black text-green font-semibold uppercase w-full sm:w-auto hover:bg-transparent hover:border hover:border-black hover:text-black"
            />
          </div>
          <label htmlFor="termo" className="text-white mt-2 block text-left">
            <input type="checkbox" name="termo" id="termo" required />
            <span className="ml-3">
              Li e concordo com os
              <a href="/termos-de-uso" className="ml-1">
                termos de uso
              </a>
              e
              <a href="/politica-de-privacidade" className="ml-1">
                política de privacidade
              </a>
            </span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default NewsletterApp;
