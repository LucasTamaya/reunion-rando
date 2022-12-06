import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Toaster } from "react-hot-toast";

import { Activity } from "@/types";
import { useDeleteActivity } from "@/hooks/activity/useDeleteActivity";

export const UpdateActivityCard: React.FC<Activity> = ({
  title,
  location,
  image_url,
  price,
  description,
  createdBy,
  id,
  userId,
}) => {
  const { mutate, isLoading } = useDeleteActivity();

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <div>
      <img src={image_url} alt="activité" className="rounded-tl" />
      <div className="flex items-center justify-between p-5 border border-t-0 rounded-bl rounded-br shadow-lg">
        <div>
          <h2 className="text-xl text-main-grey font-semibold">{title}</h2>
          <p className="text-main-green font-semibold">{price}&euro;</p>
        </div>
        <div className="flex items-center gap-x-4">
          <MdDelete
            size={25}
            color="#EF4444"
            className="cursor-pointer"
            onClick={handleDelete}
          />
          <MdEdit size={25} color="#3e363f" className="cursor-pointer" />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
