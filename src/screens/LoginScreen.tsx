import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { Input } from "@/components/common/Input";
import { loginSchema } from "@/validationSchema";

interface FormValues {
  email: string;
  password: string;
}
export const LoginScreen: React.FC = () => {
  const initialValues: FormValues = { email: "", password: "" };

  const handleSubmit = ({ email, password }: FormValues) => {
    console.log(email, password);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center px-5">
      <div className="rounded bg-white shadow-xl p-10 sm:p-16">
        <h1 className="text-lg sm:text-3xl text-gray-700 font-bold mb-5">
          Connectez-vous à votre compte
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-y-7">
            <Input label="E-mail" name="email" type="email" />
            <Input label="Mot de passe" name="password" type="password" />
            <button
              className="text-white text-base sm:text-lg font-semibold bg-main-green rounded p-2 sm:p-3"
              type="submit"
            >
              Connexion
            </button>
          </Form>
        </Formik>
        <p className="text-sm sm:text-base mt-5">
          Vous n'avez pas de compte ?{" "}
          <Link className="text-main-green underline" to="/inscription">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};
