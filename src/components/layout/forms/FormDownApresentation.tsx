import { IoMdClose } from 'react-icons/io';

interface Props {
  onValue: (value: boolean) => void;
}

const FormDownloadApresentation = ({ onValue }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center bg-black/75">
      <div className="bg-green p-8 text-white max-w-[420px] relative">
        <button
          onClick={() => onValue(false)}
          className="absolute top-4 right-4 w-[30px]"
        >
          <IoMdClose size={20} className="hover:rotate-90 transition-all" />
        </button>
        <p className="mt-6 text-lg mb-3">
          Cadastre-se para receber a apresentação completa do empreendimento do
          seu interesse.
        </p>
        <form action="" className="form">
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
              <a
                href="/politica-de-privacidade"
                className="ml-2 underline italic"
              >
                política de privacidade
              </a>
            </span>
          </label>
          <input
            type="submit"
            value="Enviar"
            className="bg-black text-white uppercase font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default FormDownloadApresentation;
