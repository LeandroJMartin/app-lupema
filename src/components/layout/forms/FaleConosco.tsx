import { Field, Form, Formik } from 'formik';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { axiosInstance } from '../../../lib/axios';
import Error from './Error';

const FaleConosco = () => {
  const mutation = useMutation((data: IInitialValues) => {
    return axiosInstance.post('api/sendEmail', data);
  });

  if (mutation.isLoading) {
    return <span>Enviando...</span>;
  }

  if (mutation.isSuccess) {
    return <span>Obrigado pelo seu contato!</span>;
  }

  return (
    <div>
      <h1 className="text-2xl">Fale conosco</h1>
      <p className="text-green">
        Entre em contato com a Lupema e tire suas dúvidas.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={(data) => {
          let formData = {
            ...data,
            data: new Date().toLocaleString(),
            subject: 'Novo contato via site: fale-conosco',
            for: 'fale_conosco',
          };

          mutation.mutate(formData);
        }}
        validationSchema={Schema}
      >
        {() => (
          <Form className="form grid grid-cols-1 gap-4">
            <Field type="text" name="nome" placeholder="Nome" />
            <Error inputName="nome" />

            <Field type="email" name="email" placeholder="E-mail" />
            <Error inputName="email" />

            <Field type="tel" name="telefone" placeholder="Telefone" />
            <Error inputName="telefone" />

            <Field
              as="textarea"
              name="mensagem"
              row={4}
              placeholder="Mensagem"
            />
            <Error inputName="mensagem" />

            <Field as="select" name="assunto">
              <option value="">Assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="reclamacao">Reclamação</option>
              <option value="vizinho">Sou vizinho de uma obra</option>
              <option value="imprensa">Imprensa</option>
            </Field>
            <Error inputName="assunto" />

            <input
              type="submit"
              value="Enviar"
              className="bg-green text-black uppercase font-semibold"
            />

            <label htmlFor="aceite">
              <Field type="checkbox" name="termos" id="aceite" />
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
            <Error inputName="termos" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FaleConosco;

interface IInitialValues {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  assunto: string | undefined;
  termos: false;
}

const initialValues: IInitialValues = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
  assunto: undefined,
  termos: false,
};

const Schema = yup.object().shape({
  nome: yup
    .string()
    .matches(
      /^([a-zA-ZÀ-ÖØ-öø-ÿ])([a-zA-ZÀ-ÖØ-öø-ÿ]+)(\s)?([a-zA-ZÀ-ÖØ-öø-ÿ]+)([a-zA-ZÀ-ÖØ-öø-ÿ]+)(?:\s([a-zA-ZÀ-ÖØ-öø-ÿ]+))+$/,
      'Nome inválido.'
    )
    .required('Campo requerido.'),
  email: yup.string().email('E-mail inválido.').required('Campo requerido.'),
  telefone: yup
    .string()
    .matches(/^(\d{2})\s(\d{5})(\d{4})$/, 'Telefone inválido.')
    .required('Campo requerido.'),
  mensagem: yup
    .string()
    .min(4, 'Mensagem inválida.')
    .required('Campo requerido.'),
  assunto: yup
    .string()
    .oneOf(['duvida', 'sugestao', 'reclamacao', 'vizinho', 'imprensa'])
    .required('Campo requerido.'),
  termos: yup
    .boolean()
    .oneOf([true], 'Você deve aceitar os termos.')
    .required('Aceite os termos.'),
});
