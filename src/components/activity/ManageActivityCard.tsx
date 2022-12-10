import { MdDelete, MdEdit } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Activity } from "@/types";
import { useDeleteActivity } from "@/hooks/activity/useDeleteActivity";
import { DeleteModal } from "./DeleteModal";

export const ManageActivityCard: React.FC<Activity> = ({
  title,
  location,
  price,
  description,
  image_url,
  cloudinary_public_id,
  id,
}) => {
  const { mutate, isLoading } = useDeleteActivity();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleDelete = () => {
    mutate({ activityId: id, cloudinaryPublicId: cloudinary_public_id });
  };

  return (
    <div>
      <img src={image_url} alt="activité" className="rounded-tl rounded-tr" />
      <div className="flex items-center justify-between p-5 border border-t-0 rounded-bl rounded-br shadow-lg">
        <div>
          <h2 className="text-lg sm:text-xl text-main-grey font-semibold">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-main-green font-semibold">
            {price}&euro;
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <MdDelete
            color="#EF4444"
            className="text-xl sm:text-2xl cursor-pointer"
            onClick={() => setShowDeleteModal(true)}
          />
          <Link
            to={`/modification-activite/${id}`}
            state={{ title, location, image_url, price, description, id }}
          >
            <MdEdit
              color="#3e363f"
              className="text-xl sm:text-2xl cursor-pointer"
            />
          </Link>
        </div>
      </div>
      {showDeleteModal ? (
        <DeleteModal
          handleCancel={setShowDeleteModal}
          handleDelete={handleDelete}
          isLoading={isLoading}
        />
      ) : null}
      <Toaster />
    </div>
  );
};
