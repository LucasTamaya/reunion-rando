import { useField } from 'formik';

import { InputErrorMessage } from './InputErrorMessage';

interface Props {
  label: string;
  name: string;
  type: string;
  accept?: string;
}

export const Input: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        className="block font-semibold text-sm sm:text-base mb-3"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        className="w-full rounded border text-sm sm:text-base outline-none p-2 sm:p-3"
        id={props.name}
        data-testid={props.name}
        {...field}
        {...props}
      />
      {/* show input error */}
      {meta.touched && meta.error ? (
        <InputErrorMessage error={meta.error} />
      ) : null}
    </div>
  );
};
