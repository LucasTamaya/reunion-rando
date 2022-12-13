import { Button } from "@/components/common/Button";

interface Props {
  avatar: string;
  lastname: string;
  firstname: string;
  email: string;
}

export const UserProviderCard: React.FC<Props> = ({
  avatar,
  lastname,
  firstname,
  email,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 p-4 rounded border shadow-md">
      {avatar ? (
        <img src={avatar} alt="avatar prestataire" />
      ) : (
        <div className="w-24 h-24 rounded-full bg-blue-500"></div>
      )}
      <div className="flex">
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
