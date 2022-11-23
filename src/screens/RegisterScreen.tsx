import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Toaster } from "react-hot-toast";

import { Input } from "@/components/common/Input";
import { registerSchema } from "@/validationSchema";
import { InputSelect } from "@/components/common/InputSelect";
import { RegisterValues } from "@/types";
import { useRegister } from "@/hooks/auth/useRegister";
import { ClipLoader } from "react-spinners";

export const RegisterScreen: React.FC = () => {
  const handleSubmit = ({ ...userData }: RegisterValues) => {
    mutate(userData);
  };

  const { mutate, isLoading } = useRegister();

  const initialValues: RegisterValues = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    role: "",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="w-full max-w-xl rounded bg-white shadow-xl p-10 sm:p-16">
        <h1 className="text-lg sm:text-3xl text-gray-700 font-bold mb-5">
          Créez votre compte RunRando
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-y-7">
            <Input label="Nom" name="lastname" type="text" />
            <Input label="Prénom" name="firstname" type="text" />
            <Input label="E-mail" name="email" type="email" />
            <Input label="Mot de passe" name="password" type="password" />
            <div>
              <span className="block font-semibold text-sm sm:text-base mb-3">
                Je suis un:
              </span>
              <InputSelect label="role" name="role">
                <option value="">Sélectionner une option</option>
                <option value="particulier">Particulier</option>
                <option value="prestataire">Prestataire</option>
              </InputSelect>
            </div>
            <button
              className="text-white text-base flex justify-center items-center sm:text-lg font-semibold bg-main-green rounded h-10 sm:h-14"
              type="submit"
            >
              {isLoading ? (
                <ClipLoader size={25} speedMultiplier={0.9} color="#fff" />
              ) : (
                <>Créer un compte</>
              )}
            </button>
          </Form>
        </Formik>
        <p className="text-sm sm:text-base mt-5">
          Vous avez un compte ?{" "}
          <Link className="text-main-green underline" to="/connexion">
            Connexion
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};
