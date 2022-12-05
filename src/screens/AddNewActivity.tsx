import { Form, Formik } from "formik";
import { ClipLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";

import { Input } from "@/components/common/Input";
import { InputSelect } from "@/components/common/InputSelect";
import { Nav } from "@/components/common/Nav";
import { TextArea } from "@/components/common/TextArea";
import { useHikes } from "@/hooks/hike/useHikes";
import { NewActivityValues } from "@/types";
import { newActivitySchema } from "@/validationSchema";
import { useAddActivity } from "@/hooks/activity/useAddActivity";
import { InputFile } from "@/components/common/InputFile";

export const AddNewActivity: React.FC = () => {
  const { isLoading, data } = useHikes();
  const { mutate, isLoading: addActivityLoading } = useAddActivity();

  const initialValues: NewActivityValues = {
    title: "",
    location: "",
    description: "",
    file: "",
    price: 0,
  };

  const createFormData = (activityData: NewActivityValues) => {
    const { title, location, file, price, description } = activityData;
    const userId = localStorage.getItem("userId")!;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("location", location);
    formData.append("file", file);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("userId", userId);

    return formData;
  };

  const handleSubmit = ({ ...activityData }: NewActivityValues) => {
    const formData = createFormData(activityData);
    mutate(formData);
  };

  return (
    <>
      <Nav />
      {isLoading ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="flex flex-col justify-center items-center px-5 mt-10">
          <div className="rounded bg-white shadow-xl p-10 sm:p-16">
            <h1 className="text-lg sm:text-3xl text-gray-700 font-bold mb-5">
              Ajoutez une nouvelle activité
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
                    Randonnée
                  </span>
                  <InputSelect label="location" name="location">
                    <option value="">Sélectionner une randonnée</option>
                    {data.map((hike) => (
                      <option key={hike.name} value={hike.name}>
                        {hike.name}
                      </option>
                    ))}
                  </InputSelect>
                </div>
                <InputFile label="Photo de la randonnée" />
                <Input label="Prix" name="price" type="number" />
                <TextArea label="Description" name="description" />
                <button
                  className="text-white text-base flex justify-center items-center sm:text-lg font-semibold bg-main-green rounded h-10 sm:h-14"
                  type="submit"
                >
                  {addActivityLoading ? (
                    <ClipLoader size={25} speedMultiplier={0.9} color="#fff" />
                  ) : (
                    <>Créer l'activité</>
                  )}
                </button>
              </Form>
            </Formik>
          </div>
          <Toaster />
        </div>
      ) : null}
    </>
  );
};
