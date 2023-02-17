import { useState } from 'react';
import CadastroImobiCorretores from '../components/layout/forms/CadastroImobiCarretores';
import FaleConosco from '../components/layout/forms/FaleConosco';
import Fornecedor from '../components/layout/forms/Fornecedor';
import OferecaSuaArea from '../components/layout/forms/OferecaSuaArea';
import TrabalheConosco from '../components/layout/forms/TrabalheConosco';

const ContatoApp = () => {
  const [form, setForm] = useState('fale_conosco');
  return (
    <section className="container py-[40px] md:py-[80px] mt-[100px] sm:mt-[74px]">
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <h2 className="text-3xl text-green mb-8">Escolha um assunto:</h2>
          <button
            className={`text-2xl py-4 block hover:text-green ${
              form === 'fale_conosco' && 'text-green'
            }`}
            onClick={() => setForm((prev) => (prev = 'fale_conosco'))}
          >
            Fale conosco
          </button>
          <button
            className={`text-2xl py-4 block hover:text-green ${
              form === 'trabalhe_conosco' && 'text-green'
            }`}
            onClick={() => setForm((prev) => (prev = 'trabalhe_conosco'))}
          >
            Trabalhe conosco
          </button>
          <button
            className={`text-2xl py-4 block hover:text-green ${
              form === 'fornecedor' && 'text-green'
            }`}
            onClick={() => setForm((prev) => (prev = 'fornecedor'))}
          >
            Seja nosso fornecedor
          </button>
          <button
            className={`text-2xl py-4 block hover:text-green ${
              form === 'cadastroImobiCorretores' && 'text-green'
            }`}
            onClick={() =>
              setForm((prev) => (prev = 'cadastroImobiCorretores'))
            }
          >
            Cadastro de imobiliárias e corretores
          </button>
          <button
            className={`text-2xl py-4 block hover:text-green ${
              form === 'oferecasuaarea' && 'text-green'
            }`}
            onClick={() => setForm((prev) => (prev = 'oferecasuaarea'))}
          >
            Ofereça sua área
          </button>
          <div className="grid grid-cols-2 gap-4 mt-[70px]">
            <div>
              <h3 className="text-green text-xl font-medium">
                Fale com a Lupema
              </h3>
              <a href="tel:+551740092300">17 4009 2300</a>
              <a href="mailto:lupema@lupemaengenharia.com.br"></a>
            </div>
            <div>
              <h3 className="text-green text-xl font-medium">Como chegar</h3>
              <p>Rua Floriano Oeixoto, 3444</p>
              <p>Santos Dumont | São José do Rio Preto - SP</p>
            </div>
          </div>
        </div>
        <div>
          {form === 'fale_conosco' && <FaleConosco />}
          {form === 'trabalhe_conosco' && <TrabalheConosco />}
          {form === 'fornecedor' && <Fornecedor />}
          {form === 'cadastroImobiCorretores' && <CadastroImobiCorretores />}
          {form === 'oferecasuaarea' && <OferecaSuaArea />}
        </div>
      </div>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.2480319017227!2d-49.40509698545035!3d-20.82168837202999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc4d3a008e947b%3A0xdec89eaae4b8e481!2sLupema%20Engenharia%20e%20Com%C3%A9rcio%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1676658308796!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContatoApp;
