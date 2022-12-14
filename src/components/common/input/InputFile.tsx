import { useFormikContext } from "formik";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

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
        className="flex items-center justify-between font-semibold border rounded text-sm sm:text-base outline-none cursor-pointer p-2 sm:p-3"
        htmlFor={label}
      >
        {label}
        <MdOutlineDriveFolderUpload size={25} />
      </label>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        hidden
        id={label}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
