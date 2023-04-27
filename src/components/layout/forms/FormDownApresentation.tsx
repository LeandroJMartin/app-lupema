import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  onValue: (value: boolean) => void;
}

const FormDownloadApresentation = ({ onValue }: Props) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [terms, setTerms] = useState('');
  const [msg, setMsg] = useState('');

  const Msg = () => {
    return <span className="italic text-black text-sm">{msg}</span>;
  };

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (nome || email || telefone || terms) {
      setMsg('Por favor, preencha todos os campos do formulário.');
    } else {
      setMsg('');
    }

    fetch('/api/enviar-formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setMsg('Formulário enviado com sucesso!');
          setNome('');
          setEmail('');
        } else {
          setMsg(
            'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.'
          );
        }
      })
      .catch((err) => {
        console.error(err);
        setMsg(
          'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.'
        );
      });
  }

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
        <Msg />
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="mb-4"
            required
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="mb-4"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="tel"
            placeholder="Telefone"
            required
            onChange={(e) => setTelefone(e.target.value)}
          />
          <label htmlFor="aceite" className="mb-4 inline-block">
            <input
              type="checkbox"
              name="termos"
              id="aceite"
              required
              onChange={(e) => setTerms(e.target.value)}
            />
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
