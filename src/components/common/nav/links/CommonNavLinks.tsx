import { Link } from "react-router-dom";

export const CommonNavLinks: React.FC<{
  setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowLogoutModal }) => {
  const userRole = localStorage.getItem("role");

  return (
    <>
      {userRole ? (
        <>
          <li className="text-lg text-gray-700 font-semibold">
            <Link to="/mes-sorties">Mes sorties</Link>
          </li>
          <li className="text-lg text-gray-700 font-semibold">
            <Link to="/profile">Modifier mes informations</Link>
          </li>
          <li
            className="text-lg text-gray-700 font-semibold cursor-pointer"
            onClick={() => setShowLogoutModal(true)}
          >
            Déconnexion
          </li>
        </>
      ) : (
        <li className="text-lg text-gray-700 font-semibold">
          <Link to="/connexion">Connexion</Link>
        </li>
      )}
    </>
  );
};
