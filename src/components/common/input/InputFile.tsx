import { useFormikContext } from "formik";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const InputFile: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Destructure the first file from the files array
    const [file] = e.target.files!;

    // Check if the file exists and its type is in the SUPPORTED_FORMATS array
    if (file && SUPPORTED_FORMATS.includes(file.type)) {
      setFieldValue(name, file);
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
