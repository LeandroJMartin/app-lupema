import StageForm from '../StageForm';

import { useFormikWizard } from 'formik-wizard-form';
import * as yup from 'yup';

const MultiStepForm = () => {
  const {
    currentStepIndex,
    renderComponent,
    handlePrev,
    handleNext,
    isNextDisabled,
    isPrevDisabled,
    isLastStep,
  } = useFormikWizard({
    initialValues: {
      opcaoArea: null,
      pretensao_salarial: '',
      area_de_interesse: null,
      nome: '',
      email: '',
      data_nascimento: '',
      idade: '',
      estado_civil: '',
      filhos: '',
      filhos_quantidade: null,
      endereco: '',
      num: '',
      bairro: '',
      cidade: '',
      estado: null,
      cep: '',
      telFixo: '',
      celular1: '',
      operadora1: '',
      celular2: '',
      operadora2: '',
      telefoneRecado: '',
      nomeRecado: '',
      ensino: '',
      graduacao: '',
      anoformacao: '',
      entidadeEscolar: '',
      outroscursos: '',
      empresa1: '',
      periodo1: '',
      funcao1: '',
      atribuicoes1: '',
      empresa2: '',
      periodo2: '',
      funcao2: '',
      atribuicoes2: '',
      empresa3: '',
      periodo3: '',
      funcao3: '',
      atribuicoes3: '',
    },
    onSubmit: (values) => console.log(values),
    validateOnNext: true,
    activeStepIndex: 0,
    steps: [
      {
        component: Stage0,
        validationSchema: yup.object().shape({
          opcaoArea: yup
            .string()
            .oneOf(['emprego', 'estagio'])
            .required('Selecione a categoria.'),
          pretensao_salarial: yup
            .string()
            .required('Digite a sua pretensão salarial.'),
          area_de_interesse: yup
            .string()
            .oneOf([
              'engenharia',
              'suprimentos',
              'obra',
              'almoxarifado',
              'administrativo',
              'outros',
              'financeiro',
              'recursos_humanos',
              'comercial',
              'recepcao',
              'estagio',
            ])
            .required('Selecione uma areá de interesse.'),
        }),
      },
      {
        component: Stage1,
        validationSchema: yup.object().shape({
          nome: yup.string().required('O campo nome é obrigatório.'),
          email: yup
            .string()
            .email('E-mail inválido.')
            .required('O campo e-mail é obrigatório.'),
          data_nascimento: yup
            .string()
            .matches(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Data inválida.')
            .required('O campo data de nascimento é obrigatório.'),
          idade: yup
            .string()
            .matches(/^(\d{0,3})$/, 'Idade inválida.')
            .required('O campo idade é obrigatório.'),
          estado_civil: yup
            .string()
            .oneOf(
              [
                'solteiro(a)',
                'casado(a)',
                'separado(a)',
                'divorciado(a)',
                'viuvo(a)',
              ],
              'Selecione um estado civil.'
            )
            .required('O campo estado civil é obrigatório.'),
          filhos: yup
            .string()
            .oneOf(['nao', 'sim'])
            .required('Informe se têm filhos.'),
          filhos_quantidade: yup
            .string()
            .matches(/(\d{0,2})/, 'Informe a quantidade de filhos')
            .required('Informe a quantidade de filhos'),
        }),
      },
      {
        component: Stage2,
        validationSchema: yup.object().shape({
          endereco: yup.string().required('O campo endereço é obrigatório.'),
          num: yup
            .string()
            .matches(/^(\d{0,6})$/, 'Informe um número válido')
            .required('O campo número é obrigatório.'),
          bairro: yup.string().required('O campo bairro é obrigatório.'),
          cidade: yup.string().required('O campo cidade é obrigatório.'),
          estado: yup
            .string()
            .oneOf(
              [
                'acre',
                'alagoas',
                'amapa',
                'amazonas',
                'bahia',
                'ceara',
                'distrito_federal',
                'espirito_santo',
                'goias',
                'maranhao',
                'mato_grosso',
                'mato_grosso_do_sul',
                'minas_gerais',
                'paraiba',
                'parana',
                'para',
                'pernambuco',
                'piaui',
                'rio_de_janeiro',
                'rio_grande_do_norte',
                'rio_grande_do_sul',
                'rondonia',
                'roraima',
                'santa_catarina',
                'sao_paulo',
                'sergipe',
                'tocantins',
              ],
              'Informe um estado válido.'
            )
            .required('O campo estado é obrigatório.'),
          cep: yup
            .string()
            .matches(/^(\d{5})\-(\d{3})$/, 'Informe um cep válido.')
            .required('O campo cep é obrigatório.'),
        }),
      },
      {
        component: Stage3,
        validationSchema: yup.object().shape({
          telFixo: yup
            .string()
            .required('O campo telefone fixo é obrigatório.'),
          celular1: yup
            .string()
            .required('O primeiro campo de celular é obrigatório.'),
          operadora1: yup
            .string()
            .required('O primeiro campo da operadora é obrigatório.'),
          celular2: yup.string().nullable(),
          operadora2: yup.string().nullable(),
          telefoneRecado: yup.string().nullable(),
          nomeRecado: yup.string().nullable(),
        }),
      },
      {
        component: Stage4,
        validationSchema: yup.object().shape({
          ensino: yup
            .string()
            .required('O campo qualificação escolar é obrigatório.'),
          graduacao: yup
            .string()
            .required('O campo graduação escolar é obrigatório.'),
          anoformacao: yup
            .string()
            .matches(/^(\d{4})$/, 'Ano inválido.')
            .required('O campo ano de formação é obrigatório.'),
          entidadeEscolar: yup
            .string()
            .required('O campo entidade escolar é obrigatório.'),
          outroscursos: yup.string().nullable(),
        }),
      },
      {
        component: Stage5,
        validationSchema: yup.object().shape({
          empresa1: yup.string().nullable(),
          periodo1: yup.string().nullable(),
          funcao1: yup.string().nullable(),
          atribuicoes1: yup.string().nullable(),
        }),
      },
      {
        component: Stage6,
        validationSchema: yup.object().shape({
          empresa2: yup.string().nullable(),
          periodo2: yup.string().nullable(),
          funcao2: yup.string().nullable(),
          atribuicoes2: yup.string().nullable(),
        }),
      },
      {
        component: Stage7,
        validationSchema: yup.object().shape({
          empresa3: yup.string().nullable(),
          periodo3: yup.string().nullable(),
          funcao3: yup.string().nullable(),
          atribuicoes3: yup.string().nullable(),
        }),
      },
    ],
  });
  return (
    <div>
      <StageForm quant={8} stage={currentStepIndex} />

      <h1 className="text-2xl">Trabalhe conosco</h1>
      <p className="text-green">
        Preencha com seus dados e faça parte da equipe Lupema Engenharia
      </p>

      <div className="py-4">{renderComponent()}</div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="bg-green py-2 px-6 text-black uppercase font-semibold"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          Voltar
        </button>

        <button
          type="button"
          className={`bg-green py-2 px-6 text-black uppercase font-semibold ${
            isLastStep && 'w-full'
          }`}
          disabled={isNextDisabled}
          onClick={handleNext}
        >
          {isLastStep ? 'Enviar' : 'Próximo'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;

const Stage0 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <div>
        <label
          htmlFor="emprego"
          className={`py-2 pl-4 pr-8 text-white cursor-pointer inline-block ${
            values.opcaoArea === 'emprego' ? 'bg-green' : 'bg-black'
          }`}
        >
          <input
            type="radio"
            name="opcaoArea"
            className="invisible"
            id="emprego"
            value="emprego"
            onChange={handleChange}
          />
          Emprego
        </label>
        <label
          htmlFor="estagio"
          className={`py-2 pl-4 pr-8 text-white ml-4 cursor-pointer inline-block ${
            values.opcaoArea === 'estagio' ? 'bg-green' : 'bg-black'
          }`}
        >
          <input
            type="radio"
            name="opcaoArea"
            className="invisible"
            id="estagio"
            value="estagio"
            onChange={handleChange}
          />
          Estágio
        </label>

        {errors.opcaoArea && <Error msg={errors.opcaoArea} />}
      </div>

      <div className="block w-full">
        <input
          type="text"
          placeholder="Pretensão salarial"
          className="w-full mt-3"
          name="pretensao_salarial"
          id="id_pretensao_salarial"
          value={values.pretensao_salarial}
          onChange={handleChange}
        />

        {errors.pretensao_salarial && <Error msg={errors.pretensao_salarial} />}
      </div>

      <div className="mt-3">
        <p>Área de interesse:</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="en" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="en"
                value="engenharia"
                onChange={handleChange}
              />
              <span className="ml-2">Engenharia</span>
            </label>
            <label htmlFor="su" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="su"
                value="suprimentos"
                onChange={handleChange}
              />
              <span className="ml-2">Suprimentos</span>
            </label>
            <label htmlFor="ob" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="ob"
                value="obra"
                onChange={handleChange}
              />
              <span className="ml-2">Obra</span>
            </label>
            <label htmlFor="al" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="al"
                value="almoxarifado"
                onChange={handleChange}
              />
              <span className="ml-2">Almoxarifado</span>
            </label>
            <label htmlFor="ad" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="ad"
                value="administrativo"
                onChange={handleChange}
              />
              <span className="ml-2">Administrativo</span>
            </label>
            <label htmlFor="ou" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="ou"
                value="outros"
                onChange={handleChange}
              />
              <span className="ml-2">Outros</span>
            </label>
          </div>
          <div>
            <label htmlFor="fi" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="fi"
                value="financeiro"
                onChange={handleChange}
              />
              <span className="ml-2">Financeiro</span>
            </label>
            <label htmlFor="rh" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="rh"
                value="recursos_humanos"
                onChange={handleChange}
              />
              <span className="ml-2">Recursos Humanos / DP</span>
            </label>
            <label htmlFor="co" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="co"
                value="comercial"
                onChange={handleChange}
              />
              <span className="ml-2">Comercial</span>
            </label>
            <label htmlFor="re" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="re"
                value="recepcao"
                onChange={handleChange}
              />
              <span className="ml-2">Recepção</span>
            </label>
            <label htmlFor="es" className="block">
              <input
                type="radio"
                name="area_de_interesse"
                id="es"
                value="estagio"
                onChange={handleChange}
              />
              <span className="ml-2">Estágio</span>
            </label>

            {errors.area_de_interesse && (
              <Error msg={errors.area_de_interesse} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Stage1 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <h2 className="font-semibold mb-2">Dados pessoais</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="col-span-2 w-full"
              value={values.nome}
              onChange={handleChange}
            />

            {errors.nome && <Error msg={errors.nome} />}
          </div>

          <div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="col-span-2 w-full"
              value={values.email}
              onChange={handleChange}
            />

            {errors.email && <Error msg={errors.email} />}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Data de nascimento"
              className="w-full"
              name="data_nascimento"
              value={values.data_nascimento}
              onChange={handleChange}
            />

            {errors.data_nascimento && <Error msg={errors.data_nascimento} />}
          </div>

          <div>
            <input
              type="text"
              placeholder="Idade"
              className="w-full"
              name="idade"
              value={values.idade}
              onChange={handleChange}
            />

            {errors.idade && <Error msg={errors.idade} />}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <select
              name="estado_civil"
              className="col-span-2 w-full"
              value={values.estado_civil}
              onChange={handleChange}
            >
              <option value="default">Estado Cívil</option>
              <option value="solteiro(a)">Solteiro(a)</option>
              <option value="casado(a)">Casado(a)</option>
              <option value="separado(a)">Separado(a)</option>
              <option value="divorciado(a)">Divorciado(a)</option>
              <option value="viuvo(a)">Viúvo(a)</option>
            </select>

            {errors.estado_civil && <Error msg={errors.estado_civil} />}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="nao" className="flex">
              <input
                type="radio"
                name="filhos"
                id="nao"
                value="nao"
                onChange={handleChange}
              />
              <span className="ml-2">Não</span>
            </label>
          </div>

          <div>
            <label htmlFor="sim" className="ml-6 flex">
              <input
                type="radio"
                name="filhos"
                id="sim"
                value="sim"
                onChange={handleChange}
              />
              <span className="ml-2">Sim</span>
            </label>
          </div>

          <input
            type="number"
            name="filhos_quantidade"
            placeholder="Quantidade"
            className="col-span-3 w-full"
            value={values.filhos_quantidade}
            onChange={handleChange}
          />
        </div>

        {errors.filhos && <Error msg={errors.filhos} />}
        {errors.filhos_quantidade && <Error msg={errors.filhos_quantidade} />}
      </div>
    </>
  );
};

const Stage2 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <h2 className="font-semibold mb-2">Endereço</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              className="w-full"
              value={values.endereco}
              onChange={handleChange}
            />

            {errors.endereco && <Error msg={errors.endereco} />}
          </div>

          <div>
            <input
              type="number"
              name="num"
              placeholder="Nº"
              value={values.num}
              onChange={handleChange}
            />

            {errors.num && <Error msg={errors.num} />}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              className="w-full"
              value={values.bairro}
              onChange={handleChange}
            />

            {errors.bairro && <Error msg={errors.bairro} />}
          </div>

          <div className="col-span-2">
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              className="w-full"
              value={values.cidade}
              onChange={handleChange}
            />

            {errors.cidade && <Error msg={errors.cidade} />}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <select
              name="estado"
              className="w-full"
              value={values.estado}
              onChange={handleChange}
            >
              <option value="default">Estado</option>
              <option value="acre">Acre</option>
              <option value="alagoas">Alagoas</option>
              <option value="amapa">Amapá</option>
              <option value="amazonas">Amazonas</option>
              <option value="bahia">Bahia</option>
              <option value="ceara">Ceará</option>
              <option value="distrito_federal">Distrito Federal</option>
              <option value="espirito_santo">Espírito Santo</option>
              <option value="goias">Goiás</option>
              <option value="maranhao">Maranhão</option>
              <option value="mato_grosso">Mato Grosso</option>
              <option value="mato_grosso_do_sul">Mato Grosso do Sul</option>
              <option value="minas_gerais">Minas Gerais</option>
              <option value="paraiba">Paraíba</option>
              <option value="parana">Paraná</option>
              <option value="para">Pará</option>
              <option value="pernambuco">Pernambuco</option>
              <option value="piaui">Piauí</option>
              <option value="rio_de_janeiro">Rio de Janeiro</option>
              <option value="rio_grande_do_norte">Rio Grande do Norte</option>
              <option value="rio_grande_do_sul">Rio Grande do Sul</option>
              <option value="rondonia">Rondônia</option>
              <option value="roraima">Roraima</option>
              <option value="santa_catarina">Santa Catarina</option>
              <option value="sao_paulo">São Paulo</option>
              <option value="sergipe">Sergipe</option>
              <option value="tocantins">Tocantins</option>
            </select>

            {errors.estado && <Error msg={errors.estado} />}
          </div>

          <div className="col-span-2">
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              className="w-full"
              value={values.cep}
              onChange={handleChange}
            />

            {errors.cep && <Error msg={errors.cep} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Stage3 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <h2 className="font-semibold mb-2">Contato</h2>
      <div className="space-y-4">
        <div className="col-span-3">
          <input
            type="tel"
            name="telFixo"
            placeholder="Telefone fixo"
            className="w-full"
            value={values.telFixo}
            onChange={handleChange}
          />

          {errors.telFixo && <Error msg={errors.telFixo} />}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <input
              type="tel"
              name="celular1"
              placeholder="Celular 1"
              className="w-full"
              value={values.celular1}
              onChange={handleChange}
            />

            {errors.celular1 && <Error msg={errors.celular1} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="operadora1"
              placeholder="Operadora"
              className="w-full"
              value={values.operadora1}
              onChange={handleChange}
            />

            {errors.operadora1 && <Error msg={errors.operadora1} />}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <input
              type="tel"
              name="celular2"
              placeholder="Celular 2"
              className="w-full"
              value={values.celular2}
              onChange={handleChange}
            />

            {errors.celular2 && <Error msg={errors.celular2} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="operadora2"
              placeholder="Operadora"
              className="w-full"
              value={values.operadora2}
              onChange={handleChange}
            />

            {errors.operadora2 && <Error msg={errors.operadora2} />}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <input
              type="tel"
              name="telefoneRecado"
              placeholder="Telefone de recado"
              className="w-full"
              value={values.telefoneRecado}
              onChange={handleChange}
            />

            {errors.telefoneRecado && <Error msg={errors.telefoneRecado} />}
          </div>

          <div className="col-span-2">
            <input
              type="text"
              name="nomeRecado"
              placeholder="Falar com"
              className="w-full"
              value={values.nomeRecado}
              onChange={handleChange}
            />

            {errors.nomeRecado && <Error msg={errors.nomeRecado} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Stage4 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <h2 className="font-semibold mb-2">Qualificação escolar</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="fu" className="block">
            <input
              type="radio"
              name="ensino"
              id="fu"
              value="fundamental"
              onChange={handleChange}
            />
            <span className="ml-2">Fundamental</span>
          </label>

          <label htmlFor="me" className="block">
            <input
              type="radio"
              name="ensino"
              id="me"
              value="medio"
              onChange={handleChange}
            />
            <span className="ml-2">Médio</span>
          </label>
        </div>

        <div>
          <label htmlFor="te" className="block">
            <input
              type="radio"
              name="ensino"
              id="te"
              value="tecnico"
              onChange={handleChange}
            />
            <span className="ml-2">Técnico</span>
          </label>

          <label htmlFor="su" className="block">
            <input
              type="radio"
              name="ensino"
              id="su"
              value="superior"
              onChange={handleChange}
            />
            <span className="ml-2">Superior</span>
          </label>

          <div className="flex items-center w-full">
            {errors.ensino && <Error msg={errors.ensino} />}
          </div>
        </div>

        <div>
          <label htmlFor="po" className="block">
            <input
              type="radio"
              name="ensino"
              id="po"
              value="pos"
              onChange={handleChange}
            />
            <span className="ml-2">Pós</span>
          </label>

          <label htmlFor="mest" className="block">
            <input
              type="radio"
              name="ensino"
              id="mest"
              value="mestrado"
              onChange={handleChange}
            />
            <span className="ml-2">Mestrado</span>
          </label>
        </div>

        <div className="col-span-3">
          <input
            type="text"
            name="graduacao"
            placeholder="Graduação"
            className="w-full"
            value={values.graducao}
            onChange={handleChange}
          />

          {errors.graduacao && <Error msg={errors.graduacao} />}
        </div>

        <div className="col-span-1">
          <input
            type="text"
            name="anoformacao"
            placeholder="Ano de Formação"
            className="w-full"
            value={values.anoformacao}
            onChange={handleChange}
          />

          {errors.anoformacao && <Error msg={errors.anoformacao} />}
        </div>

        <div className="col-span-2">
          <input
            type="text"
            name="entidadeEscolar"
            placeholder="Entidade Escolar"
            className="w-full"
            value={values.entidadeEscolar}
            onChange={handleChange}
          />

          {errors.entidadeEscolar && <Error msg={errors.entidadeEscolar} />}
        </div>

        <div className="col-span-3">
          <textarea
            name="outroscursos"
            rows={5}
            placeholder="Outros Cursos"
            className="w-full"
            value={values.outroscursos}
            onChange={handleChange}
          ></textarea>

          {errors.outroscursos && <Error msg={errors.outroscursos} />}
        </div>
      </div>
    </>
  );
};

const Stage5 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">QUALIFICAÇÃO PROFISSIONAL</h2>
        <p>Informar os Três Últimos Empregos</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <input
              type="text"
              name="empresa1"
              placeholder="Empresa"
              className="w-full"
              value={values.empresa1}
              onChange={handleChange}
            />

            {errors.empresa1 && <Error msg={errors.empresa1} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="periodo1"
              placeholder="Período"
              className="w-full"
              value={values.periodo1}
              onChange={handleChange}
            />

            {errors.graduacao && <Error msg={errors.graduacao} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="funcao1"
              placeholder="Função"
              className="w-full"
              value={values.funcao1}
              onChange={handleChange}
            />

            {errors.funcao1 && <Error msg={errors.funcao1} />}
          </div>

          <div className="col-span-2">
            <textarea
              name="atribuicoes1"
              rows={7}
              placeholder="Principais Atribuições"
              className="w-full"
              value={values.atribuicoes1}
              onChange={handleChange}
            ></textarea>

            {errors.atribuicoes1 && <Error msg={errors.atribuicoes1} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Stage6 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">2º Emprego</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <input
              type="text"
              name="empresa1"
              placeholder="Empresa"
              className="w-full"
              value={values.empresa1}
              onChange={handleChange}
            />

            {errors.empresa1 && <Error msg={errors.empresa1} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="periodo1"
              placeholder="Período"
              className="w-full"
              value={values.periodo1}
              onChange={handleChange}
            />

            {errors.graduacao && <Error msg={errors.graduacao} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="funcao1"
              placeholder="Função"
              className="w-full"
              value={values.funcao1}
              onChange={handleChange}
            />

            {errors.funcao1 && <Error msg={errors.funcao1} />}
          </div>

          <div className="col-span-2">
            <textarea
              name="atribuicoes1"
              rows={7}
              placeholder="Principais Atribuições"
              className="w-full"
              value={values.atribuicoes1}
              onChange={handleChange}
            ></textarea>

            {errors.atribuicoes1 && <Error msg={errors.atribuicoes1} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Stage7 = ({ values, errors, touched, handleChange }: any) => {
  return (
    <>
      <div>
        <h2 className="font-semibold mb-2">3º Emprego</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <input
              type="text"
              name="empresa1"
              placeholder="Empresa"
              className="w-full"
              value={values.empresa1}
              onChange={handleChange}
            />

            {errors.empresa1 && <Error msg={errors.empresa1} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="periodo1"
              placeholder="Período"
              className="w-full"
              value={values.periodo1}
              onChange={handleChange}
            />

            {errors.graduacao && <Error msg={errors.graduacao} />}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="funcao1"
              placeholder="Função"
              className="w-full"
              value={values.funcao1}
              onChange={handleChange}
            />

            {errors.funcao1 && <Error msg={errors.funcao1} />}
          </div>

          <div className="col-span-2">
            <textarea
              name="atribuicoes1"
              rows={7}
              placeholder="Principais Atribuições"
              className="w-full"
              value={values.atribuicoes1}
              onChange={handleChange}
            ></textarea>

            {errors.atribuicoes1 && <Error msg={errors.atribuicoes1} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Error = ({ msg }: { msg: string }) => {
  if (!msg) return null;

  return (
    <span className="block text-sm text-red-500 pt-2 whitespace-nowrap">
      {msg}
    </span>
  );
};
