const NewsletterApp = () => {
  return (
    <section className="bg-green py-16">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="text-black">
          <h1 className="text-5xl">Newsletter</h1>
          <p>Cadastre o seu e-mail e receba nossas novidades</p>
        </div>
        <form action="" className="col-span-2">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="py-2 px-4 w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-6"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="py-2 px-4 w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-6"
            />
            <input
              type="submit"
              value="Enviar"
              className="py-2 px-4 bg-black text-green font-semibold uppercase w-full sm:w-auto hover:bg-blue hover:text-black"
            />
          </div>
          <label htmlFor="termo" className="text-white mt-2 block text-center">
            <input type="checkbox" name="termo" id="termo" required />
            <span className="ml-3">
              Li e concordo com os <a href="">termos de uso</a> e
              <a href="">política de privacidade</a>
            </span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default NewsletterApp;
