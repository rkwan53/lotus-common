import { useState } from 'react';
//create a custom Hook to hand forms
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};
