import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { Input } from "@/components/common/Input";
import { inscriptionSchema } from "@/validationSchema";
import { InputSelect } from "@/components/common/InputSelect";

interface FormValues {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role: string;
}
export const InscriptionScreen: React.FC = () => {
  const initialValues: FormValues = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    role: "",
  };

  const handleSubmit = ({
    lastname,
    firstname,
    email,
    password,
    role,
  }: FormValues) => {
    console.log(lastname, firstname, role, email, password);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center px-5">
      <div className="rounded bg-white shadow-xl p-10 sm:p-16">
        <h1 className="text-lg sm:text-3xl text-gray-700 font-bold mb-5">
          Créez votre compte RunRando
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={inscriptionSchema}
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
              className="text-white text-base sm:text-lg font-semibold bg-main-green rounded p-2 sm:p-3"
              type="submit"
            >
              Créer un compte
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
    </div>
  );
};
