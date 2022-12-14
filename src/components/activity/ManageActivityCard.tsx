import { MdDelete, MdEdit } from 'react-icons/md';
import { BsImage } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Activity } from '@/types';
import { useDeleteActivity } from '@/hooks/activity/useDeleteActivity';
import { DeleteModal } from './DeleteModal';

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

  /**
   * Delete the activity from the DB with the activityId and delete the image from cloudinary with the cloudinary_public_id
   */
  const handleDelete = () => {
    mutate({ activityId: id, cloudinaryPublicId: cloudinary_public_id });
  };

  return (
    <div className="lg:transition lg:hover:scale-105">
      {image_url ? (
        <img
          src={image_url}
          alt="activité"
          className="w-full h-96 object-cover rounded-tl rounded-tr"
        />
      ) : (
        <div
          className="w-full h-80 flex justify-center items-center rounded-tl rounded-tr border"
          data-testid="emptyImageIcon"
        >
          <BsImage className="text-gray-700" size={100} />
        </div>
      )}

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
            data-testid="trashcanIcon"
          />
          <Link
            to={`/modification-activite/${id}`}
            state={{
              title,
              location,
              image_url,
              price,
              description,
              id,
              cloudinary_public_id,
            }}
          >
            <MdEdit
              color="#3e363f"
              className="text-xl sm:text-2xl cursor-pointer"
              data-testid="editIcon"
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
