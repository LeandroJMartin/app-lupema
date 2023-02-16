import { useState } from 'react';

const TrabalheConosco = () => {
  const [stage, setStage] = useState(1);
  return (
    <div className="">
      <h1>Trabalhe conosco</h1>
      <p>Preencha com seus dados e faça parte da equipe Lupema Engenharia</p>
      <form>
        {stage === 1 && <Stage1 />}
        {stage === 2 && <Stage2 />}
      </form>
      <button
        onClick={() => {
          setStage((prev) => prev + 1);
        }}
      >
        Próximo
      </button>
    </div>
  );
};

export default TrabalheConosco;

const Stage1 = () => {
  return (
    <>
      <input type="text" placeholder="Empresa" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Periodo" />
        <input type="text" placeholder="Função" />
      </div>
      <textarea name="atribuicao"></textarea>
    </>
  );
};

const Stage2 = () => {
  return (
    <>
      <input type="text" placeholder="Pretensão Salarial" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
      </div>
    </>
  );
};
