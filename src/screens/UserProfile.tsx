import { ClipLoader } from 'react-spinners';
import { BsPersonCircle } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';

import { Nav } from '../components/common/nav/Nav';
import { useUserData } from '../hooks/user/useUserData';
import { Formik, Form } from 'formik';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/input/Input';
import { updateUserDataSchema } from '../validationSchema/index';
import { UpdateUserDataValues } from '@/types';
import { useUpdateUserData } from '@/hooks/user/useUpdateUserData';
import { InputFile } from '@/components/common/input/InputFile';
import HelmetSeo from '@/components/common/HelmetSeo';

export const UserProfile: React.FC = () => {
  // Hook to get user data
  const { isLoading, data } = useUserData();

  // Hook to update user data
  const { mutate, isLoading: mutateLoading } = useUpdateUserData();

  const initialValues: UpdateUserDataValues = {
    lastname: data?.lastname ?? '',
    firstname: data?.firstname ?? '',
    email: data?.email ?? '',
    avatar: data?.avatar ?? '',
  };

  const createUserFormData = (userData: UpdateUserDataValues) => {
    const { lastname, firstname, email, avatar } = userData;
    const formData = new FormData();

    formData.append('lastname', lastname);
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('avatar', avatar);

    return formData;
  };

  const handleSubmit = ({ ...userData }: UpdateUserDataValues) => {
    const formData = createUserFormData(userData);
    mutate(formData);
  };

  return (
    <>
      <HelmetSeo
        title="RunRando - Profile"
        description="Ne manquez pas cette occasion de personnaliser votre profil et de le rendre encore plus attrayant pour les utilisateurs !"
        path="/profile"
      />
      <Nav />
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Profile
      </h1>

      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="flex flex-col gap-y-5 justify-center items-center max-w-lg mx-auto px-5 py-5">
          <Formik
            initialValues={initialValues}
            validationSchema={updateUserDataSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-y-7 w-full">
              {data.avatar ? (
                <img
                  src={data.avatar}
                  alt="avatar utilisateur"
                  className="w-[120px] h-[120px] rounded-full object-cover mx-auto"
                />
              ) : (
                <>
                  <BsPersonCircle
                    size={120}
                    color="grey"
                    className="mx-auto mb-2"
                  />
                </>
              )}
              <InputFile name="avatar" label="Modifier la photo" />
              <Input label="Nom" name="lastname" type="text" />
              <Input label="Prénom" name="firstname" type="text" />
              <Input label="E-mail" name="email" type="text" />
              <Button
                text={'Mettre à jour mes informations'}
                variant="primary"
                isLoading={mutateLoading}
              />
            </Form>
          </Formik>
        </div>
      ) : null}
      <Toaster />
    </>
  );
};
