import { useFormikContext } from "formik";

export const InputFile: React.FC<{ label: string }> = ({ label }) => {
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  const { setFieldValue } = useFormikContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && SUPPORTED_FORMATS.includes(files[0].type)) {
      setFieldValue("file", files[0]);
    }
  };

  return (
    <div>
      <label
        className="block font-semibold text-sm sm:text-base mb-3"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full rounded border text-sm sm:text-base outline-none p-2 sm:p-3"
        id={label}
        type="file"
        name="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={handleChange}
      />
    </div>
  );
};
