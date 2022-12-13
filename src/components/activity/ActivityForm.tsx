import { Form, Formik } from "formik";
import { ClipLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import { UseMutateFunction } from "@tanstack/react-query";

import { Input } from "@/components/common/input/Input";
import { InputSelect } from "@/components/common/input/InputSelect";
import { TextArea } from "@/components/common/input/TextArea";
import { useHikes } from "@/hooks/hike/useHikes";
import { NewActivityValues } from "@/types";
import { newActivitySchema } from "@/validationSchema";
import { InputFile } from "@/components/common/input/InputFile";
import { Button } from "../common/Button";

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
}

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
}) => {
  const { isLoading: hikesLoading, data } = useHikes();

  const initialValues: NewActivityValues = {
    title: activityTitle ?? "",
    location: activityLocation ?? "",
    description: activityDescription ?? "",
    file: activityImageUrl ?? "",
    price: activityPrice ?? 0,
  };

  const createFormData = (activityData: NewActivityValues) => {
    const { title, location, file, price, description } = activityData;
    console.log(file);

    const userId = localStorage.getItem("userId")!;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("location", location);
    formData.append("file", file);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("userId", userId);
    if (activityId) formData.append("activityId", activityId);

    return formData;
  };

  const handleSubmit = ({ ...activityData }: NewActivityValues) => {
    const formData = createFormData(activityData);
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
                    Randonnée
                  </span>
                  <InputSelect name="location">
                    <option value="">Sélectionner une randonnée</option>
                    {data.map((hike) => (
                      <option key={hike.name} value={hike.name}>
                        {hike.name}
                      </option>
                    ))}
                  </InputSelect>
                </div>
                <InputFile label="Photo de la randonnée" />
                {activityImageUrl ? (
                  <img
                    src={activityImageUrl}
                    alt="randonnée"
                    className="rounded"
                  />
                ) : null}
                <Input label="Prix" name="price" type="number" />
                <TextArea label="Description" name="description" />
                <Button
                  text={buttonText}
                  color="green"
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
