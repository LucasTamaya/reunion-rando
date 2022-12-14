import { BsPersonCircle } from "react-icons/bs";

import { Button } from "@/components/common/Button";
import { UserData } from "@/types/index";

export const UserProviderCard: React.FC<UserData> = ({
  avatar,
  lastname,
  firstname,
  email,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 p-4 rounded border shadow-md">
      {avatar ? (
        <img
          src={avatar}
          alt="avatar prestataire"
          className="rounded-full"
          width={120}
          height={120}
        />
      ) : (
        <>
          <BsPersonCircle size={120} color="grey" />
        </>
      )}
      <div className="flex mt-2">
        <p className="mr-1">{lastname}</p>
        <p>{firstname}</p>
      </div>
      <p>{email}</p>
      <a href={`mailto:${email}`} className="w-full">
        <Button text="Contacter" variant="primary" />
      </a>
    </div>
  );
};
