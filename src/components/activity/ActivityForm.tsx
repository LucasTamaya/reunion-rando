import { Form, Formik } from 'formik';
import { ClipLoader } from 'react-spinners';
import { Toaster } from 'react-hot-toast';
import { UseMutateFunction } from '@tanstack/react-query';

import { Input } from '@/components/common/input/Input';
import { InputSelect } from '@/components/common/input/InputSelect';
import { TextArea } from '@/components/common/input/TextArea';
import { useHikes } from '@/hooks/hike/useHikes';
import { NewActivityValues } from '@/types';
import { newActivitySchema } from '@/validationSchema';
import { InputFile } from '@/components/common/input/InputFile';
import { Button } from '../common/Button';

interface Props {
  formTitle: string;
  buttonText: string;
  mutate: UseMutateFunction<any, unknown, FormData, unknown>;
  mutationLoading: boolean;
  activityId?: string;
  activityTitle?: string;
  activityLocation?: string;
  activityImageUrl?: string;
  activityPrice?: number;
  activityDescription?: string;
  activityCloudinaryPublicId?: string;
}

/**
 * Form used to add or update an activity
 */
export const ActivityForm: React.FC<Props> = ({
  formTitle,
  buttonText,
  mutate,
  mutationLoading,
  activityId,
  activityTitle,
  activityLocation,
  activityImageUrl,
  activityPrice,
  activityDescription,
  activityCloudinaryPublicId,
}) => {
  // Get all hikes for select option input
  const { isLoading: hikesLoading, data } = useHikes();

  const initialValues: NewActivityValues = {
    title: activityTitle ?? '',
    location: activityLocation ?? '',
    description: activityDescription ?? '',
    file: activityImageUrl ?? '',
    price: activityPrice ?? 0,
    cloudinaryPublicId: activityCloudinaryPublicId ?? '',
  };

  const createActivityFormData = (activityData: NewActivityValues) => {
    const { title, location, description, file, price, cloudinaryPublicId } =
      activityData;
    const createdById = localStorage.getItem('userId')!;
    const formData = new FormData();

    if (activityId) formData.append('activityId', activityId);

    formData.append('title', title);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('price', price.toString());
    formData.append('cloudinaryPublicId', cloudinaryPublicId);
    formData.append('createdById', createdById);

    return formData;
  };

  const handleSubmit = ({ ...activityData }: NewActivityValues) => {
    const formData = createActivityFormData(activityData);
    mutate(formData);
  };

  return (
    <>
      {hikesLoading ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="flex flex-col justify-center items-center px-5 my-10">
          <div className="rounded bg-white max-w-2xl shadow-xl p-10 sm:p-16">
            <h1 className="text-lg sm:text-3xl text-gray-700 font-bold mb-5">
              {formTitle}
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={newActivitySchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col gap-y-7">
                <Input label="Titre" name="title" type="text" />
                <div>
                  <span className="block font-semibold text-sm sm:text-base mb-3">
                    Randonn??e
                  </span>
                  <InputSelect name="location">
                    <option value="">S??lectionner une randonn??e</option>
                    {data.map((hike) => (
                      <option key={hike.name} value={hike.name}>
                        {hike.name}
                      </option>
                    ))}
                  </InputSelect>
                </div>
                <InputFile name="file" label="Photo de la randonn??e" />
                {activityImageUrl ? (
                  <img
                    src={activityImageUrl}
                    alt="randonn??e"
                    className="rounded"
                  />
                ) : null}
                <Input label="Prix" name="price" type="number" />
                <TextArea label="Description" name="description" />
                <Button
                  text={buttonText}
                  variant="primary"
                  isLoading={mutationLoading}
                />
              </Form>
            </Formik>
          </div>
          <Toaster />
        </div>
      ) : null}
    </>
  );
};
