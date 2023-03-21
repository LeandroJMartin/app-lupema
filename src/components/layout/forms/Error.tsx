import { ErrorMessage } from 'formik';
import React from 'react';

const Error = ({ inputName }: { inputName: string }) => {
  return (
    <ErrorMessage name={inputName}>
      {(msg) => <span className="text-sm text-red-500">{msg}</span>}
    </ErrorMessage>
  );
};

export default Error;
