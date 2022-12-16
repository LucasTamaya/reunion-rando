import { useField } from 'formik';

import { InputErrorMessage } from './InputErrorMessage';

interface Props {
  label: string;
  name: string;
  type: string;
}

export const Input: React.FC<Props> = ({ label, ...props }) => {
  // Hook useField to manage form state and validation
  // field: contains the value and the onChange handler for the input element
  // meta: contains metadata about the field, such as whether it has been touched,
  // whether it has an error, and the error message.
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
      {meta.touched && meta.error ? (
        <InputErrorMessage error={meta.error} />
      ) : null}
    </div>
  );
};
