import { useField } from "formik";
import { ReactNode } from "react";

interface Props {
  label: string;
  name: string;
  children: ReactNode;
}

export const InputSelect: React.FC<Props> = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <select
        className="w-full rounded border outline-none text-sm sm:text-base p-2 sm:p-3"
        id={props.name}
        {...field}
        {...props}
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <p data-testid="inputErr" className="text-red-500">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
