import { useState } from 'react';
import StageForm from '../StageForm';

const TrabalheConosco = () => {
  const [stage, setStage] = useState(0);
  return (
    <div className="">
      <h1 className="text-2xl">Trabalhe conosco</h1>
      <p className="text-green">
        Preencha com seus dados e faça parte da equipe Lupema Engenharia
      </p>
      <StageForm quant={8} stage={stage} />
      <form className="form">
        {stage === 0 && <Stage0 />}
        {stage === 1 && <Stage1 />}
        {stage === 2 && <Stage2 />}
        {stage === 3 && <Stage3 />}
        {stage === 4 && <Stage4 />}
        {stage === 5 && <Stage5 />}
        {stage === 6 && <Stage6 />}
        {stage === 7 && <Stage7 />}
      </form>
      <div className="flex justify-between mt-6">
        {stage > 0 && (
          <button
            className="bg-green py-2 px-6 text-black uppercase font-semibold"
            onClick={() => {
              setStage((prev) => {
                if (prev === 0) return 0;
                return prev - 1;
              });
            }}
          >
            Voltar
          </button>
        )}
        <button
          className={`bg-green py-2 px-6 text-black uppercase font-semibold ${
            stage === 0 && 'w-full'
          }`}
          onClick={() => {
            setStage((prev) => {
              if (prev === 7) return 7;
              return prev + 1;
            });
          }}
        >
          {stage === 7 ? 'Enviar' : 'Próximo'}
        </button>
      </div>
    </div>
  );
};

export default TrabalheConosco;

const Stage0 = () => {
  const [check, setCheck] = useState('');
  return (
    <>
      <label
        htmlFor="emprego"
        className={`py-2 pl-4 pr-8 text-white cursor-pointer inline-block ${
          check === 'emprego' ? 'bg-green' : 'bg-black'
        }`}
      >
        <input
          type="radio"
          name="opcao"
          value="emprego"
          className="invisible"
          id="emprego"
          onChange={(e) => {
            setCheck('emprego');
          }}
        />
        Emprego
      </label>
      <label
        htmlFor="estagio"
        className={`py-2 pl-4 pr-8 text-white ml-4 cursor-pointer inline-block ${
          check === 'estagio' ? 'bg-green' : 'bg-black'
        }`}
      >
        <input
          type="radio"
          name="opcao"
          value="estagio"
          className="invisible"
          id="estagio"
          onChange={(e) => {
            setCheck('estagio');
          }}
        />
        Estágio
      </label>
      <input type="text" placeholder="Pretensão salarial" className="mt-3" />
      <div className="mt-6">
        <p>Área de interesse</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="en" className="block">
              <input type="radio" name="area" id="en" />
              <span className="ml-2">Engenharia</span>
            </label>
            <label htmlFor="su" className="block">
              <input type="radio" name="area" id="su" />
              <span className="ml-2">Suprimentos</span>
            </label>
            <label htmlFor="ob" className="block">
              <input type="radio" name="area" id="ob" />
              <span className="ml-2">Obra</span>
            </label>
            <label htmlFor="al" className="block">
              <input type="radio" name="area" id="al" />
              <span className="ml-2">Almoxarifado</span>
            </label>
            <label htmlFor="ad" className="block">
              <input type="radio" name="area" id="ad" />
              <span className="ml-2">Administrativo</span>
            </label>
            <label htmlFor="ou" className="block">
              <input type="radio" name="area" id="ou" />
              <span className="ml-2">Outros</span>
            </label>
          </div>
          <div>
            <label htmlFor="fi" className="block">
              <input type="radio" name="area" id="fi" />
              <span className="ml-2">Financeiro</span>
            </label>
            <label htmlFor="rh" className="block">
              <input type="radio" name="area" id="rh" />
              <span className="ml-2">Recursos Humanos / DP</span>
            </label>
            <label htmlFor="co" className="block">
              <input type="radio" name="area" id="co" />
              <span className="ml-2">Comercial</span>
            </label>
            <label htmlFor="re" className="block">
              <input type="radio" name="area" id="re" />
              <span className="ml-2">Recepção</span>
            </label>
            <label htmlFor="es" className="block">
              <input type="radio" name="area" id="es" />
              <span className="ml-2">Estágio</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const Stage1 = () => {
  return (
    <>
      <h2 className="font-semibold mb-2">Dados pessoais</h2>
      <div className="grid grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="col-span-2"
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="col-span-2"
        />
        <input type="text" placeholder="Data de nascimento" />
        <input type="text" placeholder="Idade" />
        <select name="estadocivil" className="col-span-2">
          <option value="default">Estado Cívil</option>
          <option value="solteiro">Solteiro(a)</option>
          <option value="casado">Casado(a)</option>
          <option value="separado">Separado(a)</option>
          <option value="desquitado">Desquitado(a)</option>
          <option value="divorciado">Divorciado(a)</option>
          <option value="viuvo">Viúvo(a)</option>
        </select>
        <div className="flex items-center">
          <label htmlFor="nao">
            <input type="radio" name="filhos" id="nao" />
            <span className="ml-2">Não</span>
          </label>
          <label htmlFor="sim" className="ml-6">
            <input type="radio" name="filhos" id="sim" />
            <span className="ml-2">Sim</span>
          </label>
        </div>
        <input
          type="number"
          name="quantfilhos"
          placeholder="Quantidade"
          className="col-span-3"
        />
      </div>
    </>
  );
};

const Stage2 = () => {
  return (
    <>
      <h2 className="font-semibold mb-2">Endereço</h2>
      <div className="grid grid-cols-4 gap-4">
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          className="col-span-3"
        />
        <input type="number" name="numero" placeholder="Nº" />
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="col-span-2"
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="col-span-2"
        />
        <select name="uf" className="col-span-2">
          <option value="default">Estado</option>
          <option value="1">Acre</option>
          <option value="2">Alagoas</option>
          <option value="3">Amapá</option>
          <option value="4">Amazonas</option>
          <option value="5">Bahia</option>
          <option value="6">Ceará</option>
          <option value="7">Distrito Federal</option>
          <option value="8">Espírito Santo</option>
          <option value="9">Goiás</option>
          <option value="10">Maranhão</option>
          <option value="11">Mato Grosso</option>
          <option value="12">Mato Grosso do Sul</option>
          <option value="13">Minas Gerais</option>
          <option value="15">Paraíba</option>
          <option value="16">Paraná</option>
          <option value="14">Pará</option>
          <option value="17">Pernambuco</option>
          <option value="18">Piauí</option>
          <option value="19">Rio de Janeiro</option>
          <option value="20">Rio Grande do Norte</option>
          <option value="21">Rio Grande do Sul</option>
          <option value="22">Rondônia</option>
          <option value="23">Roraima</option>
          <option value="24">Santa Catarina</option>
          <option value="25">São Paulo</option>
          <option value="26">Sergipe</option>
          <option value="27">Tocantins</option>
        </select>
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          className="col-span-2"
        />
      </div>
    </>
  );
};

const Stage3 = () => {
  return (
    <>
      <h2 className="font-semibold mb-2">Contato</h2>
      <div className="grid grid-cols-3 gap-4">
        <input type="tel" placeholder="Telefone fixo" className="col-span-3" />
        <input
          type="tel"
          name="celular1"
          placeholder="Celular 1"
          className="col-span-2"
        />
        <input type="text" name="operadora1" placeholder="Operadora" />
        <input
          type="tel"
          name="celular2"
          placeholder="Celular 2"
          className="col-span-2"
        />
        <input type="text" name="operadora2" placeholder="Operadora" />
        <input type="tel" name="celular2" placeholder="Telefone de recado" />
        <input
          type="text"
          name="nomerecado"
          placeholder="Falar com"
          className="col-span-2"
        />
      </div>
    </>
  );
};

const Stage4 = () => {
  return (
    <>
      <h2 className="font-semibold mb-2">Qualificação escolar</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="fu" className="block">
            <input type="radio" name="ensino" id="fu" />
            <span className="ml-2">Fundamental</span>
          </label>
          <label htmlFor="me" className="block">
            <input type="radio" name="ensino" id="me" />
            <span className="ml-2">Médio</span>
          </label>
        </div>
        <div>
          <label htmlFor="te" className="block">
            <input type="radio" name="ensino" id="te" />
            <span className="ml-2">Técnico</span>
          </label>
          <label htmlFor="su" className="block">
            <input type="radio" name="ensino" id="su" />
            <span className="ml-2">Superior</span>
          </label>
        </div>
        <div>
          <label htmlFor="po" className="block">
            <input type="radio" name="ensino" id="po" />
            <span className="ml-2">Pós</span>
          </label>
          <label htmlFor="mest" className="block">
            <input type="radio" name="ensino" id="mest" />
            <span className="ml-2">Mestrado</span>
          </label>
        </div>
        <input
          type="text"
          name="graduacao"
          placeholder="Graduação"
          className="col-span-3"
        />
        <input type="text" name="anoformacao" placeholder="Ano de Formação" />
        <input
          type="text"
          name="entidadeescolar"
          placeholder="Entidade Escolar"
          className="col-span-2"
        />
        <textarea
          name="outroscursos"
          rows={5}
          placeholder="Outros Cursos"
          className="col-span-3"
        ></textarea>
      </div>
    </>
  );
};

const Stage5 = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">QUALIFICAÇÃO PROFISSIONAL</h2>
        <p>Informar os Três Últimos Empregos</p>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="col-span-2"
          />
          <input type="text" name="periodo" placeholder="Período" />
          <input type="text" name="funcao" placeholder="Função" />
          <textarea
            name="atribuicaos"
            rows={7}
            placeholder="Principais Atribuições"
            className="col-span-2"
          ></textarea>
        </div>
      </div>
    </>
  );
};

const Stage6 = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">2º Emprego</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="col-span-2"
          />
          <input type="text" name="periodo" placeholder="Período" />
          <input type="text" name="funcao" placeholder="Função" />
          <textarea
            name="atribuicaos"
            rows={7}
            placeholder="Principais Atribuições"
            className="col-span-2"
          ></textarea>
        </div>
      </div>
    </>
  );
};

const Stage7 = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">3º Emprego</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="col-span-2"
          />
          <input type="text" name="periodo" placeholder="Período" />
          <input type="text" name="funcao" placeholder="Função" />
          <textarea
            name="atribuicaos"
            rows={7}
            placeholder="Principais Atribuições"
            className="col-span-2"
          ></textarea>
        </div>
      </div>
    </>
  );
};
