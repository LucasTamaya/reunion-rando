import { useField } from 'formik';
import { ReactNode } from 'react';

import { InputErrorMessage } from './InputErrorMessage';

interface Props {
  name: string;
  children: ReactNode;
}

export const InputSelect: React.FC<Props> = ({ children, name }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <select
        className="w-full rounded border outline-none text-sm sm:text-base p-2 sm:p-3"
        id={name}
        {...field}
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <InputErrorMessage error={meta.error} />
      ) : null}
    </div>
  );
};
