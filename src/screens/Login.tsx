import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Toaster } from "react-hot-toast";

import { Input } from "@/components/common/input/Input";
import { loginSchema } from "@/validationSchema";
import { useLogin } from "@/hooks/auth/useLogin";
import { LoginValues } from "@/types";
import { Button } from "@/components/common/Button";

export const Login: React.FC = () => {
  const { mutate, isLoading } = useLogin();

  const handleSubmit = ({ ...userData }: LoginValues) => {
    mutate(userData);
  };

  const initialValues: LoginValues = { email: "", password: "" };
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
            <Button text="Connexion" color="green" isLoading={isLoading} />
          </Form>
        </Formik>
        <p className="text-sm sm:text-base mt-5">
          Vous n'avez pas de compte ?{" "}
          <Link className="text-main-green underline" to="/inscription">
            S'inscrire
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};
