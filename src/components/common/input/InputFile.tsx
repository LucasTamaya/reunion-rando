import { useFormikContext } from 'formik';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';
import { useState } from 'react';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const InputFile: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}) => {
  const { setFieldValue } = useFormikContext();
  const [uploadedFile, setUploadedFile] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Destructure the first file from the files array
    const [file] = e.target.files!;

    // Check if the file exists and its type is in the SUPPORTED_FORMATS array
    if (file && SUPPORTED_FORMATS.includes(file.type)) {
      setFieldValue(name, file);
      setUploadedFile(true);
    }
  };

  return (
    <div>
      <label
        className="flex items-center justify-between font-semibold border rounded text-sm sm:text-base outline-none cursor-pointer p-2 sm:p-3"
        htmlFor={label}
      >
        {label}
        {uploadedFile ? (
          <BsCheck2Circle size={25} className="text-main-green" />
        ) : (
          <MdOutlineDriveFolderUpload size={25} />
        )}
      </label>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        data-testid="hiddenInputFile"
        hidden
        id={label}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
