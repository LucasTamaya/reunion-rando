import { Formik } from "formik";
import { ReactNode } from "react";

interface Props {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  children: ReactNode;
}
export const FormikWrapper: React.FC<Props> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};
