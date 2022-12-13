import { useField } from "formik";

import { InputErrorMessage } from "./InputErrorMessage";

interface Props {
  label: string;
  name: string;
}

export const TextArea: React.FC<Props> = ({ label, name }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <label
        className="block font-semibold text-sm sm:text-base mb-3"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className="w-full h-44 rounded border resize-none overflow-auto text-sm sm:text-base outline-none p-2 sm:p-3"
        id={name}
        {...field}
      ></textarea>
      {/* show form error */}
      {meta.touched && meta.error ? (
        <InputErrorMessage error={meta.error} />
      ) : null}
    </div>
  );
};
