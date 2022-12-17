import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Toaster } from 'react-hot-toast';

import { Input } from '@/components/common/input/Input';
import { registerSchema } from '@/validationSchema';
import { InputSelect } from '@/components/common/input/InputSelect';
import { RegisterValues } from '@/types';
import { useRegister } from '@/hooks/auth/useRegister';
import { Button } from '@/components/common/Button';

export const Register: React.FC = () => {
  const { mutate, isLoading } = useRegister();

  const handleSubmit = ({ ...userData }: RegisterValues) => {
    mutate(userData);
  };

  const initialValues: RegisterValues = {
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    role: '',
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] mb-10"
        />
      </Link>
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
              <InputSelect name="role">
                <option value="">Sélectionner une option</option>
                <option value="particulier">Particulier</option>
                <option value="prestataire">Prestataire</option>
              </InputSelect>
            </div>
            <Button
              text="Créer un compte"
              variant="primary"
              isLoading={isLoading}
            />
          </Form>
        </Formik>
        <p className="text-sm sm:text-base mt-5">
          Vous avez un compte ?{' '}
          <Link className="text-main-green underline" to="/connexion">
            Connexion
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};
