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
      <button className="w-full  text-white text-base sm:text-lg font-semibold bg-main-green rounded p-2 sm:p-3">
        <a href={`mailto:${email}`} className="block w-full h-full">
          Contacter
        </a>
      </button>
    </div>
  );
};
